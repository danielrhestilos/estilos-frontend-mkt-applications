import React from 'react'

const SupportChat = () => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=51995177120"
        target="__blank"
        style={{ display: 'block', cursor: 'pointer' }}
      >
        <button
          style={{
            right: '20px',
            width: '58px',
            bottom: '30px',
            cursor: 'pointer',
            height: '58px',
            position: 'fixed',
            boxShadow: 'none',
            pointerEvents: 'auto',
            backgroundColor: '#E91111',
            display: 'block',
            borderRadius: '50%',
          }}
        >
          <svg width="32px" height="26px" viewBox="0 0 32 26" version="1.1">
            <g
              id="Main"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Group-2" transform="translate(0.508387, 0.419355)">
                <path
                  d="M8,-6.57252031e-14 L22.9677419,-6.57252031e-14 C27.3860199,-6.65368276e-14 30.9677419,3.581722 30.9677419,8 L30.9677419,17.1612903 C30.9677419,21.5795683 27.3860199,25.1612903 22.9677419,25.1612903 L1.59872116e-14,25.1612903 L1.59872116e-14,25.1612903 L1.59872116e-14,8 C1.54461286e-14,3.581722 3.581722,-6.49135786e-14 8,-6.57252031e-14 Z"
                  id="Rectangle"
                  fill="#FFFFFF"
                ></path>
                <rect
                  id="Rectangle"
                  fill="#3C4257"
                  x="4.83870968"
                  y="7.16129032"
                  width="21.483871"
                  height="3.67741935"
                  rx="1.83870968"
                ></rect>
                <rect
                  id="Rectangle"
                  fill="#3C4257"
                  x="4.83870968"
                  y="14.516129"
                  width="14"
                  height="3.67741935"
                  rx="1.83870968"
                ></rect>
              </g>
            </g>
          </svg>
        </button>
      </a>
    </>
  )
}

export default SupportChat
