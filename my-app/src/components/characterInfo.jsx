import React from 'react';
import { Card, CardContent, TextField, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root:{
        minWidth: 275,
        paddingTop: '1%',
    },
    additionalInfo:{
        margin: theme.spacing(1),
    },
    text: {
        margin: theme.spacing(3),
    }
}));

const CharacterInfo = () => {

    const [state, setNewState] = React.useState({
        CharacterName: '',
        ClassName: '',
        ClassLevel: '0',
        Background: '',
        PlayerName: '',
        Race: '',
        Alignment: '',
        ExperiencePoints: '0',
    });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Typography className={classes.text} variant='h3'> Character Info </Typography>
            <CardContent>
                <TextField
                    className={classes.additionalInfo}
                    id='Character-Name'
                    variant='outlined'
                    label='Character Name'
                    type='text'
                    defaultValue= {state.CharacterName || '' }
                    onChange={(e) => setNewState(e.target.value)}
                /> 
                <TextField
                    className={classes.additionalInfo}
                    id='Class-Name'
                    variant='outlined'
                    label='Class'
                    type='text'
                    defaultValue={state.ClassName || ''}
                    onChange={(e) => setNewState(e.target.value)}
                />
                <TextField
                    className={classes.additionalInfo}
                    id='Class-Level'
                    variant='outlined'
                    label='Level'
                    type='number'
                    defaultValue={state.ClassLevel || ''}
                    onChange={(e) => setNewState(e.target.value)}
                />
                <TextField
                    className={classes.additionalInfo}
                    id='Background'
                    variant='outlined'
                    label='Background'
                    type='text'
                    defaultValue={state.Background || ''}
                    onChange={(e) => setNewState(e.target.value)}
                />
                <TextField
                    className={classes.additionalInfo}
                    id='Player-Name'
                    variant='outlined'
                    label='Player'
                    type='text'
                    defaultValue={state.PlayerName || ''}
                    onChange={(e) => setNewState(e.target.value)}
                />
                <TextField
                    className={classes.additionalInfo}
                    id='Alignment'
                    variant='outlined'
                    label='Alignment'
                    type='text'
                    defaultValue={state.Alignment || ''}
                    onChange={(e) => setNewState(e.target.value)}
                />
                <TextField
                    className={classes.additionalInfo}
                    id='Experience'
                    variant='outlined'
                    label='Experience'
                    type='number'
                    defaultValue={state.ExperiencePoints || ''}
                    onChange={(e) => setNewState(e.target.value)}
                />
            </CardContent>
        </Card>
    );
}

export default CharacterInfo;