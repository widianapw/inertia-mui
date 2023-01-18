import PropTypes from 'prop-types';
import {memo} from 'react';
// @mui
import {Box} from '@mui/material';
//
import SimpleBar from 'simplebar-react';
import styled from "@mui/material/styles/styled";
import {alpha} from "@mui/material/styles";
// ----------------------------------------------------------------------

export const StyledRootScrollbar = styled('div')(() => ({
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden',
}));

export const StyledScrollbar = styled(SimpleBar)(({theme}) => ({
    maxHeight: '100%',
    '& .simplebar-scrollbar': {
        '&:before': {
            backgroundColor: alpha(theme.palette.grey[600], 0.48),
        },
        '&.simplebar-visible:before': {
            opacity: 1,
        },
    },
    '& .simplebar-track.simplebar-vertical': {
        width: 10,
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
        height: 6,
    },
    '& .simplebar-mask': {
        zIndex: 'inherit',
    },
}));


Scrollbar.propTypes = {
    sx: PropTypes.object,
    children: PropTypes.node,
};

function Scrollbar({children, sx, ...other}) {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobile) {
        return (
            <Box sx={{overflowX: 'auto', ...sx}} {...other}>
                {children}
            </Box>
        );
    }

    return (
        <>
            <StyledRootScrollbar>
                <StyledScrollbar clickOnTrack={false} sx={sx} {...other}>
                    {children}
                </StyledScrollbar>
            </StyledRootScrollbar>
        </>
    );
}

export default memo(Scrollbar);
