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

const Notiftemp = ({navigation, route}) => {

    const temp = route.params.temp;
    const solusi = `
Suhu Air Saat Ini: ${(temp)}

Beberapa faktor yang mempengaruhi suhu air tinggi seperti cuaca, paparan sinar matahari dan aktivitas industri.

Jika suhu air sangat tinggi anda bisa melakukan tindakan seperti :

1. Revegetasi dan Penyediaan Tumbuhan Peneduh : Menanam lebih banyak tumbuhan di sekitar sungai dan daerah resapan air untuk memberikan peneduh. Ini membantu mengurangi paparan langsung sinar matahari ke air, sehingga membantu menurunkan suhu

2. Kebijakan Perlindungan Lingkungan: Menerapkan kebijakan yang lebih ketat terkait pelestarian lingkungan, regulasi pelepasan air panas, dan perlindungan habitat sungai serta daerah resapan air.

3. Pendidikan dan Kesadaran Masyarakat: Mengedukasi masyarakat mengenai pentingnya menjaga kualitas suhu air sungai dan dampaknya terhadap ekosistem air. Masyarakat dapat turut serta dalam upaya menjaga sumber air dengan meminimalisir aktivitas yang berdampak negatif.

4. Adaptasi dan Peningkatan Kesadaran Terhadap Perubahan Iklim: Mengembangkan strategi adaptasi untuk menghadapi perubahan iklim yang dapat menyebabkan suhu air yang lebih tinggi secara umum. Peningkatan kesadaran mengenai perubahan iklim akan membantu masyarakat dan pengambil kebijakan mengambil langkah-langkah preventif yang lebih luas.
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

export default Notiftemp