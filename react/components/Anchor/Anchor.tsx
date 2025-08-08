import React, { useCallback } from 'react'

interface AnchorProps {
    targetId: string
    children: React.ReactNode
    offset?: number
}

const Anchor = ({ targetId, children, offset = 0 }: AnchorProps) => {
    //   const [select, setSelect] = useState(false)
    const handleClick = useCallback(
        (e) => {
            e.preventDefault()
            const element = document.getElementById(targetId)

            if (element) {
                const topPosition =
                    element.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top: topPosition, behavior: 'smooth' })
            }
        },
        [targetId, offset]
    )

    return (
        <span onClick={handleClick} style={{ cursor: 'pointer' }}>
            {children}
        </span>
    )
}
export default Anchor
