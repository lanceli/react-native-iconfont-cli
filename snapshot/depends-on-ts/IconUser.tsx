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
const IconUser: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M518.07603918 6.737455c-174.95658274 0-316.73174462 141.77516188-316.73174465 316.73174464 0 82.95355218 32.42729765 159.11999552 84.46179858 214.92511241 16.59071043 18.09895683 35.44379047 33.93554407 55.80511691 47.5097617 50.5262545 33.93554407 111.61023382 53.54274731 176.46482916 53.5427473s126.69269785-19.60720323 176.46482915-53.5427473c20.36132644-13.57421762 39.21440646-29.41080486 55.80511691-47.5097617C803.13460934 482.58919514 834.80778381 406.42275179 834.80778381 323.46919964c0-174.95658274-141.77516188-316.73174462-316.73174463-316.73174464z m166.66122752 501.491929c-22.62369604 20.36132644-49.01800811 36.95203687-77.67468975 47.50976169-27.90255844 10.55772482-58.06748652 16.59071043-88.98653777 16.59071044s-61.83810252-6.03298562-88.98653779-16.59071044c-28.65668166-11.31184801-55.0509937-27.14843525-77.67468975-47.50976169C300.88855716 462.98199189 269.21538268 396.61915017 269.21538268 323.46919964c0-137.25042267 111.61023382-248.86065649 248.8606565-248.86065651s248.86065649 111.61023382 248.86065648 248.86065651c0 73.14995053-31.67317446 139.51279228-82.19942896 184.76018436z"
        fill={color ? typeof color === 'string' && color || color[0] || '#263238' : '#263238'}
      />
      <Path
        d="M341.61121002 586.65819695C205.11491054 652.26691548 110.84951037 791.77970775 110.84951037 953.16207287c0 18.85308003-15.08246403 33.93554407-33.93554406 33.93554407s-33.93554407-15.08246403-33.93554409-33.93554407c0-177.97307556 98.03601619-332.56833185 242.82767089-414.76776082 16.59071043 18.09895683 35.44379047 33.93554407 55.80511691 48.2638849zM993.17365612 953.16207287c0 18.85308003-15.08246403 33.93554407-33.93554408 33.93554407s-33.93554407-15.08246403-33.93554405-33.93554407c0-161.38236511-94.26540019-300.8951574-230.76169966-366.50387592 20.36132644-13.57421762 39.21440646-29.41080486 55.80511691-47.5097617 144.79165469 81.44530576 242.82767087 236.04056206 242.82767088 414.01363762z"
        fill={color ? typeof color === 'string' && color || color[1] || '#15BBDF' : '#15BBDF'}
      />
    </Svg>
  );
};

IconUser.defaultProps = {
  size: 20,
};

export default IconUser;

/* eslint-enable */
/* tslint:enable */
