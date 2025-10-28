interface AppConfig {
    apiUrl: string;
    appName: string;
}

const getEnvironmentConfig = (): AppConfig => {
    switch (import.meta.env.MODE) {
        case 'production':
            return {
                // to be changed later in production mode
                apiUrl: 'https://flask-to-do-list-psi.vercel.app',
                appName: 'My React App - Production',
            }
        default:
            return {
                apiUrl: 'http://127.0.0.1:5000',
                appName: 'My React App - Development',
            }
    }
}

const config = getEnvironmentConfig();

export default config;