import {useState} from 'react';
// form
// @mui
import {IconButton, InputAdornment, Link, Stack} from '@mui/material';
import {LoadingButton} from '@mui/lab';
// auth
// components
import Iconify from '../../components/iconify';
import {useForm} from "@inertiajs/inertia-react";
import FormProvider from "@/components/inertia-form/FormProvider";
import INFTextField from "@/components/inertia-form/INFTextField";

// ----------------------------------------------------------------------

export default function AuthLoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const methods = useForm({
        email: "",
        password: "",

    })
    const {data, setData, post, errors, processing} = methods

    const onSubmit = (e) => {
        e.preventDefault()
        post("/login")
    }

    return (
        <FormProvider onSubmit={onSubmit} methods={methods}>
            <Stack spacing={3}>
                <INFTextField name={"email"} label={"Email Address"}/>
                <INFTextField
                    label={"Password"}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    name={"password"}/>
            </Stack>

            <Stack alignItems="flex-end" sx={{my: 2}}>
                <Link variant="body2" color="inherit" underline="always">
                    Forgot password?
                </Link>
            </Stack>

            <LoadingButton
                fullWidth
                color="inherit"
                size="large"
                type="submit"
                variant="contained"
                loading={processing}
                // loading={isSubmitSuccessful || isSubmitting}
                sx={{
                    bgcolor: 'text.primary',
                    color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                    '&:hover': {
                        bgcolor: 'text.primary',
                        color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                    },
                }}
            >
                Login
            </LoadingButton>
        </FormProvider>
    );
}
