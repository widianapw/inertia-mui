import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {router} from '@inertiajs/react'
// @mui
import {alpha} from '@mui/material/styles';
import {Box, Divider, MenuItem, Stack, Typography} from '@mui/material';
// routes
// auth
// components
import CustomAvatar from '@/Components/custom-avatar/CustomAvatar';
import {useSnackbar} from '@/Components/snackbar';
import MenuPopover from '@/Components/menu-popover';
import IconButtonAnimate from '@/Components/animate/IconButtonAnimate';
import {usePage} from "@inertiajs/inertia-react";

// ----------------------------------------------------------------------

const OPTIONS = [
    {
        label: 'Home',
        linkTo: '/',
    },
    {
        label: 'Profile',
        linkTo: '/',
    },
    {
        label: 'Settings',
        linkTo: '/',
    },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
    const navigate = useNavigate();
    const {auth} = usePage().props
    const user = auth?.user

    // const { user, logout } = useAuthContext();

    const {enqueueSnackbar} = useSnackbar();

    const [openPopover, setOpenPopover] = useState(null);

    const handleOpenPopover = (event) => {
        setOpenPopover(event.currentTarget);
    };

    const handleClosePopover = () => {
        setOpenPopover(null);
    };

    const handleLogout = async () => {
        try {
            router.post("/logout", {})
            handleClosePopover();
        } catch (error) {
            console.error(error);
            enqueueSnackbar('Unable to logout!', {variant: 'error'});
        }
    };

    const handleClickItem = (path) => {
        handleClosePopover();
        navigate(path);
    };

    return (
        <>
            <IconButtonAnimate
                onClick={handleOpenPopover}
                sx={{
                    p: 0,
                    ...(openPopover && {
                        '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                        },
                    }),
                }}
            >
                <CustomAvatar src={null} alt={user?.name} name={user?.name}/>
            </IconButtonAnimate>

            <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{width: 200, p: 0}}>
                <Box sx={{my: 1.5, px: 2.5}}>
                    <Typography variant="subtitle2" noWrap>
                        {user?.name}
                    </Typography>

                    <Typography variant="body2" sx={{color: 'text.secondary'}} noWrap>
                        {user?.email}
                    </Typography>
                </Box>

                <Divider sx={{borderStyle: 'dashed'}}/>

                <Stack sx={{p: 1}}>
                    {OPTIONS.map((option) => (
                        <MenuItem key={option.label} onClick={() => handleClickItem(option.linkTo)}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>

                <Divider sx={{borderStyle: 'dashed'}}/>

                <MenuItem onClick={handleLogout} sx={{m: 1}}>
                    Logout
                </MenuItem>
            </MenuPopover>
        </>
    );
}
