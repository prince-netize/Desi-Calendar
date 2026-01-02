/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function Header() {
  return (
    <View style={{ height: 50, justifyContent: 'center' }}>
      <TouchableOpacity style={{ position: 'absolute', left: 16 }}>
        <Feather name="chevron-left" size={24} />
      </TouchableOpacity>
      <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '500' }}>
        ਦੇਸੀ ਕਲੰਡਰ
      </Text>
    </View>
  );
}
