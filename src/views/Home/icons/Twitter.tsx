import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={33} {...props}>
    <path
      data-name="Path 29909"
      d="M40 3.917a16.266 16.266 0 0 1-4.714 1.31A8.334 8.334 0 0 0 38.9.62a16.257 16.257 0 0 1-5.212 2.021A8.121 8.121 0 0 0 23.815.985 8.279 8.279 0 0 0 20.208 4.9a8.439 8.439 0 0 0-.508 5.335 23.037 23.037 0 0 1-9.37-2.525 23.368 23.368 0 0 1-7.545-6.176 8.42 8.42 0 0 0 2.539 11.119 8.089 8.089 0 0 1-3.717-1.041v.1a8.409 8.409 0 0 0 1.856 5.275 8.193 8.193 0 0 0 4.728 2.893 8.146 8.146 0 0 1-3.709.143 8.33 8.33 0 0 0 2.918 4.14 8.135 8.135 0 0 0 4.748 1.645 16.382 16.382 0 0 1-5.736 2.951 16.242 16.242 0 0 1-6.413.5A22.971 22.971 0 0 0 12.578 33C27.675 33 35.93 20.31 35.93 9.305c0-.358-.01-.721-.026-1.075A16.81 16.81 0 0 0 40 3.919Z"
      style={{
        fill: '#b07efa',
      }}
    />
  </svg>
)

export default SvgComponent
