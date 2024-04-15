import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import Like from '../assets/icons/like.png';
import Share from '../assets/icons/share.png';
import { style } from '../styles/recipeCardStyle';

const RecipeCard = () => {
    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image source={{
                    uri: 'https://tinyurl.com/2p82zzca/2807982c-986a-4def-9e3a-153a3066af7a.png',
                }}
                    style={{
                        height: '100%', width: '100%'
                    }} />
            </View>
            <View style={style.aboutContainer}>
                <Text style={{ fontFamily: 'Mali-SemiBold', fontSize: 12, color: '#000000', lineHeight: 16 }}>
                    Black Karaage with Curry Bento
                </Text>
                <Text numberOfLines={2} style={{ fontFamily: 'Mali-Regular', fontSize: 12, marginTop: 4, color: '#000000', lineHeight: 16 }}>
                    This Japanese modern izakaya dish features crispy black ka..
                </Text>
                <View style={{
                    flexDirection: 'row', paddingTop: 12, width: 49, height: 18
                }}>
                    <TouchableOpacity style={{ width: 18, height: 18, justifyContent: 'center' }} >
                        <Image source={Share} style={{ alignSelf: 'center' }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 18, height: 18, marginLeft: 4 }}>
                        <Image source={Like} ></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};



export default RecipeCard;