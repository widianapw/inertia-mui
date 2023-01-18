import './bootstrap';
// import '../css/app.css';
import './locales/i18n';
import 'simplebar-react/dist/simplebar.min.css';


import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/inertia-react';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {AuthProvider} from "@/auth/JwtContext";
import ScrollToTop from "@/components/scroll-to-top";
import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter} from "react-router-dom";
import MotionLazyContainer from "@/components/animate/MotionLazyContainer";
import ThemeProvider from "@/Theme";
import ThemeLocalization from "@/Locales";
import SnackbarProvider from "@/components/snackbar";
import {SettingsProvider} from "@/Components/settings/SettingsContext";
import ThemeSettings from "@/Components/settings/ThemeSettings";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const AppWrapper = ({children}) => {
    return <AuthProvider>
        <HelmetProvider>
            <SettingsProvider>
                <BrowserRouter>
                    <ScrollToTop/>
                    <MotionLazyContainer>
                        <ThemeProvider>
                            <ThemeSettings>
                                <ThemeLocalization>
                                    <SnackbarProvider>
                                        {children}
                                    </SnackbarProvider>
                                </ThemeLocalization>
                            </ThemeSettings>
                        </ThemeProvider>
                    </MotionLazyContainer>
                </BrowserRouter>
            </SettingsProvider>
        </HelmetProvider>
    </AuthProvider>
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {
        const root = createRoot(el);
        root.render(
            <AppWrapper>
                <App {...props} />
            </AppWrapper>
        );
    },
});

InertiaProgress.init({color: '#4B5563'});
