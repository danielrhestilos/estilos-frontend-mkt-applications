import React from 'react'
import styles from './pagination.module.css'
function ArrowPaginationRight() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 16 16"
      className={styles.iconSliderPaginationPLP}
    >
      <path
        d="M5.432 1.067C5.309 1.067 5.187 1.112 5.091 1.202 4.889 1.39 4.879 1.707 5.067 1.909L9.209 6.339C9.68 6.81 9.932 7.419 9.932 8.068 9.932 8.717 9.68 9.326 9.221 9.785L5.067 14.226C4.879 14.428 4.889 14.745 5.091 14.933 5.292 15.12 5.609 15.112 5.798 14.91L9.94 10.48C10.576 9.844 10.933 8.984 10.933 8.068 10.933 7.152 10.576 6.292 9.929 5.644L5.799 1.226C5.7 1.121 5.567 1.068 5.434 1.068L5.432 1.067Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke="currentColor"
        stroke-width="2"
      ></path>
    </svg>
  )
}

export default ArrowPaginationRight
