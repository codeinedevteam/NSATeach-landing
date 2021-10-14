import { useState } from "react"

import React,{useEffect,useRef} from 'react';

const useSmoothScrollTo = id => {
    const ref = useRef(null)
    useEffect(() => {
        const listener = e => {
            if (ref.current && window.hash === id) {
                ref.current.scrollIntoView({behavior: 'smooth'})
            }
        }
        window.addEventListener('hashchange', listener, true)
        return () => {
            window.removeEventListener('hashchange', listener)
        }
    }, [])
    return {
        'data-anchor-id': id,
        ref
    }
}
export default useSmoothScrollTo;