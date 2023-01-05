import { Card, CardHeader, CardContent, Box,Skeleton } from '@mui/material'
import React from 'react'

const postSkeleton = () => {
    return (
        <>
            <Card sx={{ maxWidth: '100%', mt: 2 }}>
                <CardHeader
                    avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
                    action={null}
                    title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
                    subheader={<Skeleton animation="wave" height={10} width="40%" />}
                />{<Skeleton sx={{ height: 250 }} animation="wave" variant="rectangular" />}
                <CardContent>
                    <Box>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default postSkeleton