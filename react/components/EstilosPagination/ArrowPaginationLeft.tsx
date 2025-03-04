import React from 'react'
import styles from './pagination.module.css'
function ArrowPaginationLeft() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 16 16"
      className={styles.iconSliderPaginationPLP}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke="currentColor"
          stroke-width="2"
          d="M10.696.722C10.825.722 10.953.769 11.054.864 11.266 1.061 11.276 1.394 11.079 1.606L6.731 6.256C6.236 6.751 5.972 7.39 5.972 8.071 5.972 8.753 6.236 9.392 6.718 9.874L11.079 14.536C11.276 14.748 11.266 15.081 11.054 15.278 10.843 15.474 10.51 15.466 10.312 15.254L5.963 10.603C5.296 9.936 4.921 9.033 4.921 8.071 4.921 7.11 5.296 6.207 5.975 5.527L10.311.889C10.414.779 10.554.723 10.694.723L10.696.722Z"
          fill="currentColor"
        ></path>
      </svg>
    </svg>
  )
}

export default ArrowPaginationLeft
