import { borders } from "@/constants/BorderStyles";
import { col } from "@/constants/Colors";
import { View } from "react-native-animatable";
import { TextInput } from "react-native-gesture-handler";

export default function MyTextInput({
  style,
  value = "",
  placeholder,
  multiline = true,
  numberOfLines = 4,
  maxLength = 400,
  editable,
  cursorColor = col[600],
  inputMode = "text",
  keyboardType = "default",
  onChange,
}: {
  style?: any;
  value?: string;
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  editable?: boolean;
  cursorColor?: string;
  inputMode?:
    | "text"
    | "numeric"
    | "decimal"
    | "email"
    | "url"
    | "search"
    | "tel"
    | undefined;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url"
    | undefined;
  onChange?: (text: string) => void;
}) {
  //const [textValue, setTextValue] = useState(value ? value : placeholder);
  const onChangeText = (text: string) => {
    //setTextValue(text);
    if (onChange) {
      onChange(text);
    }
  };
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <TextInput
        style={[
          editable ? borders.borderMd500 : borders.borderMd400,
          {
            backgroundColor: editable ? col[200] : col[800],
            color: editable ? col[900] : col[500],
            borderRadius: 10,
            padding: 10,
            width: "95%",
            fontSize: 16,
            fontWeight: 600,
          },
          style,
        ]}
        editable={editable}
        multiline={multiline}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder={placeholder}
        cursorColor={cursorColor}
        inputMode={inputMode}
        keyboardType={keyboardType}
      />
    </View>
  );
}
