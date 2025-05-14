import { io, Socket } from 'socket.io-client'
import { useRef, useState, useCallback } from 'react'

export const useWebSocket = (timeoutMs = 180000) => {
  const socketRef = useRef<Socket | null>(null)
  const [message, setMessage] = useState<any | null>(null)

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

    setTimeout(() => {
      console.log('Cerrando WebSocket por timeout')
      socket.close()
    }, timeoutMs)

  }, [timeoutMs])

  const sendMessage = (data: string) => {
    if (socketRef.current?.active) {
      socketRef.current.emit("register", data)
    } else {
      console.warn('WebSocket no esta abierto.')
    }
  }

  const close = () => {
    socketRef.current?.close()
  }

  return { message, connect, sendMessage, close }
}
