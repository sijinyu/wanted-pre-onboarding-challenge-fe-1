import React, { useRef, useEffect, RefObject } from 'react';
import { Alert } from '@mui/material';

function useAlert(message: string) {
	return <Alert severity="error">{message}</Alert>;
}

export default useAlert;
