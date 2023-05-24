'use client'

import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

interface Props {
    children: ReactNode;
}


//add meta data in your app
export const metadata = {
    title: "Next-core",
    description: "Personal next-core",
};


const RootLayout: React.FC<Props> = ({ children }) => {
    return (

        <html lang='en'>
            <body>
                <CacheProvider>
                    <ChakraProvider>
                        <main className='app'>
                            {children}
                        </main>
                    </ChakraProvider>
                </CacheProvider>
            </body>
        </html>

    )
}

export default RootLayout