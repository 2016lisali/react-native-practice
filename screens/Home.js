import { useState } from 'react';
import { View, SafeArea, FlatList, Text } from 'react-native';
// Flat list renders only when they r about to appear on screen and delete
// them when they r off the view which will reduce the memory usage
// SafeArea renders content within the safe area boundaries of a device to make sure everything is within the view
import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusStatusBar } from '../components';

const Home = () => {
    return (
        <SafeArea style={{ flex: 1 }}>
            <FocusStatusBar background={COLORS.primary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList data={NFTData}
                        renderItem={(item) => <TNFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>
                <View style={
                    {
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        zIndex: -1,
                    }
                }>
                    <View style={{ height: 300, background: COLORS.primary }} />
                    <View style={{ flex: 1, background: COLORS.white }} />
                </View>
            </View>
        </SafeArea>
    )
}

export default Home