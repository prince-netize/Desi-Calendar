/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function Header() {
  return (
    <View style={{ height: 50, justifyContent: 'center' }}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: 16,
          height: 40,
          width: 40,
          borderRadius: 8,
          borderColor: '#1E76FE73',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Feather name="chevron-left" size={24} />
      </TouchableOpacity>
      <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '500' }}>
        ਦੇਸੀ ਕਲੰਡਰ
      </Text>
    </View>
  );
}
