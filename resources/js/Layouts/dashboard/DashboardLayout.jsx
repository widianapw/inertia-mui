import {useState} from 'react';
// @mui
import {Box} from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import {useSettingsContext} from '@/Components/settings';
//
import Main from './Main';
import Header from '@/Layouts/dashboard/header/Header.jsx';
import NavMini from './nav/NavMini';
import NavVertical from '@/Layouts/dashboard/nav/NavVertical';
import NavHorizontal from './nav/NavHorizontal';

// ----------------------------------------------------------------------

export default function DashboardLayout({children}) {
    const {themeLayout} = useSettingsContext();

    const isDesktop = useResponsive('up', 'lg');

    const [open, setOpen] = useState(false);

    const isNavHorizontal = themeLayout === 'horizontal';

    const isNavMini = themeLayout === 'mini';

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose}/>;

    if (isNavHorizontal) {
        return (
            <>
                <Header onOpenNav={handleOpen}/>

                {isDesktop ? <NavHorizontal/> : renderNavVertical}

                <Main>
                    {children}
                </Main>
            </>
        );
    }

    if (isNavMini) {
        return (
            <>
                <Header onOpenNav={handleOpen}/>

                <Box
                    sx={{
                        display: {lg: 'flex'},
                        minHeight: {lg: 1},
                    }}
                >
                    {isDesktop ? <NavMini/> : renderNavVertical}

                    <Main>
                        {children}
                    </Main>
                </Box>
            </>
        );
    }

    return (
        <>
            <Header onOpenNav={handleOpen}/>
            <Box
                sx={{
                    display: {lg: 'flex'},
                    minHeight: {lg: 1},
                }}
            >
                {renderNavVertical}
                <Main>
                    {children}
                </Main>
            </Box>
        </>
    );
}
