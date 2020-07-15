import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: 345,
    },
    media: {
        height: 140,
    },
    title: {
        color: theme.palette.primary.main
    }
}))

const MyComponent = () => {

    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/radio4.jpg"
                    title="Me at BBC Radio4"
                >
                </CardMedia>
                <CardContent>
                    <Typography>
                        Andrew Owen Martin
                    </Typography>
                    <Typography>
                        In April 2015 I was asked on BBC Radio 4's Today programme to discuss if an algorithm could run the government.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    href="//www.aomartin.co.uk/"
                >
                    Go to my website
                </Button>
            </CardActions>
        </Card>
    )
}

export default MyComponent
