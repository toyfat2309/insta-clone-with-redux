import { Card, CardHeader, Skeleton } from '@mui/material'
import React from 'react'

const FriendsSkeleton = () => {

    const loadingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            {
                loadingArray.map((num, i) => (<Card key={i} sx={{ width: '100%' }}><CardHeader
                    avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
                    action={null}
                    title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
                    subheader={<Skeleton animation="wave" height={10} width="40%" />}
                />
                </Card>))
            }
        </>
    )
}

export default FriendsSkeleton