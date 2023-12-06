import { STYLE_VARIABLES } from '../constants/style.constants';

export const roundTemperature = (temperature: number): number => {
    return Math.round(temperature);
};

export const getTemperatureColor = (temperature: number): string => {
    switch (true) {
        case temperature < -10:
            return STYLE_VARIABLES.darkBlue;
        case temperature < 0:
            return STYLE_VARIABLES.blue;
        case temperature > 30:
            return STYLE_VARIABLES.red;
        case temperature > 20:
            return STYLE_VARIABLES.orange;
        case temperature > 10:
            return STYLE_VARIABLES.darkGreen;
        case temperature > 0:
            return STYLE_VARIABLES.green;
        default:
            return STYLE_VARIABLES.blue;
    }
};
