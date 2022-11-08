import React, {useState, useEffect} from 'react';
import * as sty from '../styles/global';
import {SiWechat, SiTwitter, SiGmail} from 'react-icons/si';
import {RiWechatLine, RiMailLine, RiTwitterLine} from 'react-icons/ri';

const ModeDetector = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const Listener = (e) => {
        setIsDarkMode(e.matches);
    };

    useEffect(() => {
        const darkModeEvent = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeEvent.addEventListener('change', Listener);
        return () => darkModeEvent.removeEventListener('change', darkModeEvent);
    }, []);
    return isDarkMode;
};

export function Icons() {
    const isDarkMode = ModeDetector();
    return (
        <sty.icons>
            <sty.icon href='https://twitter.com/'>
                {isDarkMode ? (
                    <SiWechat aria-label='WeChat' />
                ) : (
                    <RiWechatLine aria-label='WeChat' />
                )}
            </sty.icon>

            <sty.icon href='https://twitter.com/'>
                {isDarkMode ? (
                    <SiTwitter aria-label='Twitter' />
                ) : (
                    <RiTwitterLine aria-label='Twitter' />
                )}
            </sty.icon>
            <sty.icon href='https://twitter.com/'>
                {isDarkMode ? (
                    <SiGmail aria-label='Mail' />
                ) : (
                    <RiMailLine aria-label='Mail' />
                )}
            </sty.icon>
        </sty.icons>
    );
}
