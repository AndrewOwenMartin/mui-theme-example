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
    card: {
        margin: theme.spacing(3),
        width: 345,
    },
    media: {
        height: 240,
    },
    title: {
        color: theme.palette.primary.main
    }
}))

const MyComponent = () => {

    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/radio4.jpg"
                    title="Me at BBC Radio4"
                >
                </CardMedia>
                <CardContent>
                    {/* Styling title text using classNames */}
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        Andrew Owen Martin
                    </Typography>
                    {/* Styling body text using color */}
                    <Typography variant="body2" color="textSecondary" component="p">
                        In April 2015 I was asked on BBC Radio 4's Today programme to discuss if an algorithm could run the government.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    href="//www.aomartin.co.uk/"
                >
                    Go to my website
                </Button>
            </CardActions>
        </Card>
    )
}

export default MyComponent
