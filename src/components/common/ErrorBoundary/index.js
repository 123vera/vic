import { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null
    }

    componentDidCatch (error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        // You can also log error messages to an error reporting service here
        this.setState({
            error: error,
            errorInfo: errorInfo
        }, () => {
            console.error(`[ Error Boundary ]`, this.state)
        })
    }

    render () {
        return this.state.errorInfo ? null : this.props.children
    }
}

export default ErrorBoundary
