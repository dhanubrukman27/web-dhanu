import React, {useEffect, useState} from 'react';
import { 
    View, 
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import Icon from "react-native-vector-icons/Feather";

const Notiftds = ({navigation, route}) => {

    const tds = route.params.tds;
    const solusi = `
TDS Air Saat Ini: ${(tds)}

Beberapa faktor yang mempengaruhi tds air tinggi pada sungai seperti aktivitas pertanian dan limbah industri.

Jika tds air sangat tinggi anda bisa melakukan tindakan seperti :

1. Identifikasi Sumber Pencemaran
2. Pengelolaan Pertanian
3. Pengawasan Industri
4. Kebijakan Lingkungan
5. Edukasi Masyarakat
    
    `
    return (
        <View>
            <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
            <View className="flex flex-row items-center bg-sky-600 pt-12">
                <TouchableOpacity
                        onPress={() => navigation.goBack()} 
                        className="flex items-center justify-center h-[57px] w-[57px]"
                    >
                        <Icon name="arrow-left" size={24} color="white"  />
                    </TouchableOpacity>
                <Text className="text-white font-bold text-2xl">CATATAN</Text>
            </View>
            <ScrollView className="p-6">
                <Text className="text-base text-slate-600 pb-[150px]">{solusi}</Text>
            </ScrollView>
        </View>
    )
}

export default Notiftds