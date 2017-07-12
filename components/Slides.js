import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Slides extends Component {
    renderSlides() {
        return this.props.data.map((slide) => {
            return (
                <View key={slide.text} 
                    style={[styles.slideStyle, { backgroundColor: slide.color }]}>
                    <Text style={styles.textStyle}>{slide.text}</Text>
                </View>
            );
        })
    }

    render() {
        return (
            <View style={{ height: SCREEN_HEIGHT }}>
                <ScrollView
                    horizontal
                    style={{ flex: 1 }}
                    pagingEnabled
                >
                    {this.renderSlides()}
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
        color: 'white'
    }
}

export default Slides;