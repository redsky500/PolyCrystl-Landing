import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    style={{
      paddingLeft: '5px',
    }}
    viewBox="0 0 130.33 149.877"
    {...props}
  >
    <path
      data-name="Path 29621"
      d="M130.122 37.268 97.835 18.612C80.077 8.351 65.295-.024 64.986 0S49.975 8.42 32.315 18.656L.207 37.267.1 75.048 0 112.829l32.193 18.524c17.706 10.189 32.545 18.524 32.976 18.524s15.268-8.336 32.972-18.524l32.189-18.524-.1-37.781ZM19.225 48.5l22.6-13.12c12.429-7.216 22.951-13.08 23.382-13.034s10.934 5.954 23.34 13.118L111.1 48.5v53.089l-22.573 13.027c-12.417 7.168-22.927 13.032-23.362 13.032S54.22 121.784 41.8 114.616l-22.575-13.032V48.5Zm75.721 8.718c-.215-.206-6.829-4.085-14.7-8.622s-14.539-8.328-14.819-8.424-7.177 3.686-15.328 8.4l-14.82 8.581v35.775l14.943 8.622 14.943 8.622 14.7-8.469c8.083-4.658 14.871-8.637 15.086-8.842s-2.4-1.979-5.806-3.941l-6.2-3.567-8.613 4.969a88.808 88.808 0 0 1-9.26 4.948 95.794 95.794 0 0 1-9.045-4.9l-8.4-4.88v-20.9l8.4-4.88a95.94 95.94 0 0 1 9.045-4.9 88.81 88.81 0 0 1 9.26 4.948l8.613 4.97 6.2-3.567c3.403-1.961 6.016-3.737 5.801-3.942Z"
      style={{
        fill: '#B07EFA',
        fillRule: 'evenodd',
      }}
    />
  </svg>
)

export default SvgComponent
