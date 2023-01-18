// @mui
import {alpha, styled} from '@mui/material/styles';
import {Box, Typography} from '@mui/material';
// auth
// components
import CustomAvatar from '../../../Components/custom-avatar/CustomAvatar';
import {usePage} from "@inertiajs/inertia-react";

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

export default function NavAccount() {
    const {auth} = usePage().props

    return (
        <StyledRoot>
            <CustomAvatar src={null} alt={auth?.user?.name} name={auth?.user?.name}/>

            <Box sx={{ml: 2, minWidth: 0}}>
                <Typography variant="subtitle2" noWrap>
                    {auth?.user?.name}
                </Typography>

                <Typography variant="body2" noWrap sx={{color: 'text.secondary'}}>
                    {auth?.user?.email}
                </Typography>
            </Box>
        </StyledRoot>
    );
}
