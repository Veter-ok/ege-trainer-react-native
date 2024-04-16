import { useState } from "react";
import { StyleProp, Switch, TextStyle } from "react-native"
import { FunctionComponent as FC } from "react";

interface ICustomSwitchProps {
  onChange: (value: boolean) => void
  style?: StyleProp<TextStyle>
}

export const CustomSwitch:FC<ICustomSwitchProps> = ({onChange, style}) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
      onChange(isEnabled)
    }

    return (
        <Switch
          style={style}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
    )
}