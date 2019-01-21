import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker'

const MyDatePicker = ({ label, placeholder, value, onDateChange }) => {

    const { labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <DatePicker
                style={{width: 200, marginRight: 15 }}
                date={value}
                mode="date"
                placeholder={ placeholder }
                format="YYYY-MM-DD"
                minDate="0001-01-01"
                maxDate="2018-09-11"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={onDateChange}
            />
        </View>
    );
};

export {MyDatePicker};

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1, // so it will fill all the available space that there is
        flexDirection: 'row',
        alignItems: 'center' // so the items will align vertically
    }
}