import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactPropTypes } from 'react';

type MAButtonProps = {
    label?: string;
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
    variant?: ButtonProps['variant'];
    color?: ButtonProps['color'];
    size?: ButtonProps['size'];
    className?: string;
    colorScheme?: string
};

const MAButton: React.FC<MAButtonProps> = ({
    label,
    onClick,
    loading,
    disabled,
    variant,
    color,
    size,
    className,
    colorScheme
}) => {
    return (
        <Button
            size={size || 'md'}
            onClick={onClick}
            isLoading={loading}
            disabled={disabled}
            variant={variant}
            color={color}
            className={className}
            colorScheme={colorScheme || 'teal'}
        >
            {label}
        </Button>
    );
};

export default MAButton;