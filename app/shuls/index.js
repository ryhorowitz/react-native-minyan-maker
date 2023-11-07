import { View, Text } from 'react-native'
import { Link } from 'expo-router'


export default function Page() {
  return (
    <View>
      <Link href="/">About</Link>

      <Link href="/shuls">Shuls</Link>
      <Text>This is the Shuls file</Text>
    </View>
  );
}
