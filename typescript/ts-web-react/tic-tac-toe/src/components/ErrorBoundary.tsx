import React, {Component} from "react";

export class ErrorBoundary extends Component<{}, { hasError: boolean; }> {
    state = {
        hasError: false
    };

    static getDerivedStateFromError(error: Error) {
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error(error, errorInfo);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        if (!this.state.hasError) {
            return this.props.children;
        }
        return (
            <p style={{color: 'red'}}>Error</p>
        );
    }
}