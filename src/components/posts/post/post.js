import React from "react"
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment'
import { Dispatch, useDispatch } from "react-redux"
import { deletePost, likePost } from "../../../store/actions/posts"

import useStyles from './styles'
import { color, style } from "@mui/system"


const Post = ({ post, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className={classes.card}>
            {post.selectedFile && <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />}
            <div className={post.selectedFile ? '' : classes.noImg}>
                <div className={post.selectedFile ? classes.overlay : ''}>
                    {/* <div className={classes.overlay}> */}
                    {post.creator && <Typography variant="h6">{post.creator}</Typography>}
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={post.selectedFile ? classes.overlay2 : ''}>
                    {/* <div className={classes.overlay2} > */}
                    <Button style={{ color: post.selectedFile ? 'white' : 'black' }} size="small" onClick={() => setCurrentId(post._id)}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                </div>
            </div>
            {post?.tags && post?.tags.length > 0 && post?.tags[0] !== '' && <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>}
            {post.title && <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>}
            {post.message && <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>}
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>

        </Card>
    )
}

export default Post