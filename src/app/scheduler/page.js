"use client"
import React, { useState,useEffect } from 'react';
import {Calendar, Alert, Button, TimePicker, theme} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {toast} from "react-toastify";
dayjs.extend(customParseFormat);

const Scheduler = () => {
    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(dayjs('00:00:00', 'HH:mm:ss'));
    const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [alertType,setAlertType]=useState('info');
    useEffect(() => {
        const fetchTimezone = async () => {
            const { timeZone } = await Intl.DateTimeFormat().resolvedOptions();
            setTimezone(timeZone);
        };

        fetchTimezone();
    }, []);
    const onDateChange = (value) => {
        setDate(value);
    };

    const onTimeChange = (time, timeString) => {
        setSelectedTime(dayjs(timeString, 'HH:mm:ss'));
    };

    const combinedDateTime = dayjs(date).set('hour', selectedTime.hour()).set('minute', selectedTime.minute());
    const { token } = theme.useToken();
    const wrapperStyle = {
        width: '80%',
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
        padding:20,
        margin:'auto'
    };

    const handleScheduleClick = () => {
        const currentDateTime = dayjs();

        if (combinedDateTime.isBefore(currentDateTime)) {
           setAlertType('error');
           toast.error('Please Select A Date After Today')
        } else {
            setAlertType('success')
            console.log('Scheduled session at:', combinedDateTime.format('YYYY-MM-DD HH:mm:ss'));
        }
    };

    return (
        <div style={{marginTop:'20px'}}>
            <Alert type={alertType} message={`You selected date and time: ${combinedDateTime.format('YYYY-MM-DD HH:mm')} (${timezone})`} style={{ width: '80%',margin:'auto' }} />
            <div style={wrapperStyle}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
                    <div style={{ width: '60%' }}>
                        <h2>Select Date For The Session</h2>
                        <Calendar fullscreen={false} onSelect={onDateChange} />
                    </div>

                    <div style={{ width: '30%' }}>
                        <h2>Select Time</h2>
                        <TimePicker onChange={onTimeChange}  defaultOpenValue={selectedTime} />
                    </div>
                </div>
                <div style={{ margin: 'auto', display: 'flex', marginTop: '20px' }}>
                    <Button type="primary" className="bg-primary-color white-color button" onClick={handleScheduleClick}>
                        Schedule Session
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Scheduler;
