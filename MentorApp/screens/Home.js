import React, {useEffect, useState} from 'react';
import { 
    View, 
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from "react-native-vector-icons/Feather";

const imageZat = require('./image/zat.png');
const imageTemp = require('./image/tmp.png');

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Home = ({navigation}) => {

    const [tds,settds] = useState(0)
    const [temp,settemp] = useState(0);

    useEffect(() => {
        setInterval(() => {
            ambilData()
        }, 1000);
    }, [])
    
   async function ambilData() {
        await fetch('http://192.168.100.63/web-dhanu/api/sensor')
        .then(response => response.json())
        .then(data => {
            const dataTds = data.data[0].tds;
            const dataTemp = data.data[0].temp;
            settds(dataTds);
            settemp(dataTemp);
        })
        .catch(error => {
            console.log(error.message);
        });
   }

    return (
        <View className="flex-1 bg-white">
            <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
            <View className="flex flex-row items-center justify-between pt-12 px-6 pb-3 bg-sky-600">
                <Text className="text-white font-bold text-2xl">MONTIR SUNGAI</Text>
            </View>
            {
                
                tds >= 500 ? (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Notiftds', {tds})} 
                        className="absolute bottom-0 bg-red-600 w-full px-6 py-4 flex flex-row items-center mt-12 mx-6 z-10 rounded-md" style={{ width: Width - 40 }}
                    >
                        <Icon name="alert-circle" size={24} color="white"  />
                        <Text className="text-white font-bold text-base mx-3">AIR TERLALU KERUH</Text>
                    </TouchableOpacity>
                ) : null
            }
            {
                temp >= 37 ? (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Notifsuhu', {temp})} 
                        className={`absolute ${tds > 500 ? 'bottom-16' : 'bottom-0'} bg-red-600 w-full px-6 py-4 flex flex-row items-center mt-12 mx-6 z-10 rounded-md`} style={{ width: Width - 40 }}
                    >
                        <Icon name="alert-circle" size={24} color="white"  />
                        <Text className="text-white font-bold text-base mx-3">SUHU AIR TERLALU TINGGI</Text>
                    </TouchableOpacity>
                ) :null 
            }
            <View className="flex flex-row items-center justify-center gap-3 mt-3">
                <View className="flex items-center justify-center p-3 bg-slate-200 rounded-md" style={{ width: Width - 200 }}>
                    <Image source={imageZat} className="w-[100px] h-[50px] mb-3 " />
                    <Text className="text-xl text-slate-500 font-bold">
                            {tds >= 500 ?
                                (<Text className="text-red-700 uppercase">Air Keruh</Text>
                                ) : (
                                <Text className="text-green-600 uppercase">Normal</Text>
                                )}
                        </Text>
                    <Text className="text-base text-slate-500 font-medium uppercase">KEKERUHAN</Text>
                </View>
                <View className="flex items-center justify-center p-3 bg-slate-200 rounded-md" style={{ width: Width - 200 }}>
                    <Image source={imageTemp} className="w-[50px] h-[50px] mb-3" />
                    <Text className="text-xl text-slate-500 font-bold">
                        {temp >= 37 ?
                                (<Text className="text-red-700 uppercase">Suhu Tinggi</Text>
                                ) : (
                                <Text className="text-green-600 uppercase">Suhu Normal</Text>
                                )}
                        </Text>
                    <Text className="text-base text-slate-500 font-medium uppercase">Temperatur AIR</Text>
                </View>
            </View>
            <View
                className={`p-3  h-[500px] flex items-center justify-center`}
            >
                <View className="flex items-center justify-center mb-6">
                    <AnimatedCircularProgress
                        size={120}
                        width={4}
                        fill={tds}
                        tintColor={`${tds >= 500 ? "#dc2626" : "#16a34a"}`}
                        backgroundColor="#cbd5e1">
                        {
                            (tds) => (
                            <Text className="text-2xl text-slate-700 font-bold">
                                {tds} ppm
                            </Text>
                            )
                        }
                    </AnimatedCircularProgress>
                    <Text className="text-2xl text-slate-500 font-bold mt-3">KEKERUHAN</Text>
                </View>
                <View className="flex items-center justify-center">
                    <AnimatedCircularProgress
                        size={120}
                        width={4}
                        fill={temp}
                        tintColor={`${temp >= 37 ? "#dc2626" : "#16a34a"}`}
                        backgroundColor="#cbd5e1">
                        {
                            (temperatur) => (
                            <Text className="text-2xl text-slate-700 font-bold">
                                { temp} °C 
                            </Text>
                            )
                        }
                    </AnimatedCircularProgress>
                    <Text className="text-2xl text-slate-500 font-bold mt-3">TEMPERATUR</Text>
                </View>
            </View>
        </View>
    )
}

export default Home