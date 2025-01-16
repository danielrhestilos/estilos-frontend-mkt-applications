import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

interface BlockWithTooltipCustomProps {
  children: React.ReactNode
  tooltipText: string
}

function BlockWithTooltip({
  children,
  tooltipText,
}: BlockWithTooltipCustomProps) {
  return (
    <div>
      <ReactTooltip anchorSelect=".my-anchor-element" place="top">
        {tooltipText}
      </ReactTooltip>
      <div className="my-anchor-element">{children}</div>
    </div>
  )
}

export default BlockWithTooltip
