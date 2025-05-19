import { useRef, useState, useCallback, useEffect } from 'react'
import { io, Socket } from 'socket.io-client'

interface EventMessage {
  purchaseNumber: string
  transactionAmount: string
  transactionCurrency: string
  transactionDate: string
  maskCard: string
  wallet: string
}

export const useWebSocket = (timeoutMs = 180000) => {
  const socketRef = useRef<Socket | null>(null)
  const [message, setMessage] = useState<EventMessage | null>(null)
  const [timeLeft, setTimeLeft] = useState<number>(timeoutMs)
  const intervalRef = useRef<number | null>(null)

  const connect = useCallback((url: string) => {
    if (socketRef.current?.active) return
    const socket = io(url, { path: "/payment/validate_niubiz" })
    socketRef.current = socket
    socket.on("connect", () => {
      console.log('WebSocket conectado!')
    })
    socket.on("registered", () => {
      console.log('Conectado')
    })
    socket.on("notification", (event) => {
      console.log('Mensaje recibido:', event)
      setMessage(event)
    })
  }, [])

  const sendMessage = useCallback((data: string) => {
    if (socketRef.current?.active) {
      socketRef.current.emit("register", data)
    } else {
      console.warn('WebSocket no está abierto.')
    }
  }, [])

  const close = useCallback(() => {
    socketRef.current?.close()
    socketRef.current = null
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = window.setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1000) {
          clearInterval(intervalRef.current!)
          intervalRef.current = null
          close()
          console.log('Cerrando WebSocket por timeout')
          return 0
        }
        return prev - 1000
      })
    }, 1000)
  }, [close])

  const resetTimeout = useCallback(() => {
    setTimeLeft(timeoutMs)
    startInterval()
  }, [timeoutMs, startInterval])

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      close()
    }
  }, [startInterval, close])

  return { message, connect, sendMessage, timeLeft, resetTimeout }
}