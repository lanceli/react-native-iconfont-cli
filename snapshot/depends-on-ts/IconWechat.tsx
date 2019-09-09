/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

// If you don't like lots of icon files in your project,
// try to set generate_mode to "all-in-one" in root file "iconfont.json".
// And then regenerate icons by using cli command.
const IconWechat: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M579.598841 511.554783A24.635362 24.635362 0 0 0 556.521739 535.744928a24.264348 24.264348 0 0 0 23.373913 21.667246c17.511884 0 29.681159-10.833623 29.68116-21.667246 0-13.356522-12.54029-24.190145-29.68116-24.190145zM502.798841 398.988986a27.826087 27.826087 0 0 0 29.681159-29.16174 27.38087 27.38087 0 0 0-29.681159-29.161739c-17.511884 0-34.207536 10.833623-34.207537 29.161739s16.695652 29.161739 34.207537 29.16174zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zM415.536232 641.706667a275.812174 275.812174 0 0 1-82.587826-13.356522l-84.591305 42.592464 24.190145-71.754203C213.333333 557.486377 178.086957 504.57971 178.086957 440.691014c0-113.456232 106.777971-200.347826 236.929855-200.347826 115.088696 0 217.711304 68.415072 237.449275 165.175653a115.533913 115.533913 0 0 0-22.26087-2.522899c-113.456232 0-201.015652 85.110725-201.015652 187.65913a201.089855 201.089855 0 0 0 6.678261 50.086957 175.044638 175.044638 0 0 1-20.851014 0.816232z m347.863188 81.623188l16.695652 60.030145-63.369275-35.84c-24.190145 4.971594-47.564058 12.54029-71.754203 12.54029-111.749565 0-200.347826-76.725797-200.347826-171.853913s88.449855-171.853913 200.347826-171.853913c105.590725 0.148406 200.941449 76.874203 200.941449 172.002319 0 53.351884-35.84 100.915942-82.587826 135.123478zM337.623188 340.591304c-17.511884 0-35.84 10.833623-35.84 29.161739s18.328116 29.235942 35.84 29.235943a28.716522 28.716522 0 0 0 29.68116-29.235943 28.197101 28.197101 0 0 0-29.68116-29.161739z m372.869566 170.666667a24.041739 24.041739 0 0 0-23.373913 24.190145 23.596522 23.596522 0 0 0 23.373913 21.667246c16.695652 0 29.161739-10.833623 29.161739-21.667246 0-13.356522-12.54029-24.190145-29.161739-24.190145z m0 0"
        fill={color ? typeof color === 'string' && color || color[0] || '#19D100' : '#19D100'}
      />
    </Svg>
  );
};

IconWechat.defaultProps = {
  size: 20,
};

export default IconWechat;

/* eslint-enable */
/* tslint:enable */
