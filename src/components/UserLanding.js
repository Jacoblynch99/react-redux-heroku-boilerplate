import {
    AppBar,
    Box,
    Select,
    MenuItem,
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    Chip,
    Dialog,
    DialogTitle,
    DialogActions,
    Container,
} from '@material-ui/core'
import React, { useState } from 'react'

const UserLanding = (props) => {
    const [proffesion, setProfession] = useState('All')
    const [open, setOpen] = React.useState(false)
    const [ticket, setTicket] = useState({
        userId: '',
        businessId: '',
        startDate: '',
    })
    const [quote, setQuote] = useState({
        text: '',
        author: '',
    })

    const [view, setView] = useState('businesses')

    const handleClickOpen = (business_id) => {
        setTicket((prevState) => ({
            tickets: {
                ...prevState.tickets,
                userId: props.currentUser,
                businessId: business_id,
                startDate: new Date(),
            },
        }))
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const selectFilter = (event) => {
        if (event.target.name === 'proffesion') {
            setProfession(event.target.value)
        } else {
            setView(event.target.value)
            props.getTickets()
        }
    }

    const submitTicket = () => {
        props.createTicket(ticket)
    }

    const adviceButton = () => {
        generateRandomQuote()
    }

    const generateRandomQuote = () => {
        let randomIndex = Math.floor(Math.random() * 1642) + 0
        setQuote((prevState) => ({
            ...prevState.quote,
            text: `"${props.quotes[randomIndex].text}"`,
            author: `-${props.quotes[randomIndex].author}`,
        }))
    }

    const consol = () => {
        console.log(props.tickets)
    }

    React.useEffect(() => props.getBusinesses(), [])
    React.useEffect(() => props.getTickets(), [])
    React.useEffect(() => props.getQuotes(), [])

    return (
        <Box style={{ height: '100vh', width: '100vw' }}>
            <AppBar color="secondary" position="relative">
                <Container maxWidth="sm">
                    <Select
                        value={proffesion}
                        onChange={selectFilter}
                        style={{ width: 200 }}
                        name="proffesion"
                    >
                        <MenuItem value={'All'}>All</MenuItem>
                        <MenuItem value={'Landscaper'}>Landscaper</MenuItem>
                        <MenuItem value={'Electrician'}>Electrician</MenuItem>
                        <MenuItem value={'Plumber'}>Plumber</MenuItem>
                    </Select>

                    {/* <Select
                        value={view}
                        onChange={selectFilter}
                        name="view"
                        style={{ width: 200, marginLeft: 30 }}
                    >
                        <MenuItem value={'businesses'}>Place an order</MenuItem>
                        <MenuItem value={'tickets'}>View tickets</MenuItem>
                    </Select> */}
                </Container>
            </AppBar>
            <Button onClick={adviceButton} style={{ color: 'black' }}>
                Want some advice?
            </Button>
            {/* <Button onClick={consol} style={{ color: 'black' }}>
                CLICK ME{' '}
            </Button> */}
            <Container maxWidth="sm">
                <Typography style={{ fontSize: 20, fontStyle: 'italic' }}>
                    {' '}
                    {quote.text}{' '}
                </Typography>
                <Typography style={{ fontSize: 12 }}>
                    {' '}
                    {quote.author}
                </Typography>
            </Container>
            {props.businesses.map((item, id) => {
                let phone = ''

                // formats phone number from 10 numbers in a row to standard format
                const cleaned = ('' + item.phone).replace(/\D/g, '')
                const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
                if (match) {
                    phone = '(' + match[1] + ') ' + match[2] + '-' + match[3]
                }

                if (proffesion === item.proffesion || proffesion === 'All') {
                    return (
                        <Box
                            style={{
                                width: '100vw',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            key={item.business_name}
                        >
                            <Card
                                style={{
                                    width: 350,

                                    margin: 20,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                <CardContent style={{ paddingBottom: 1 }}>
                                    <Typography variant="h5" component="h2">
                                        {item.business_name}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {item.proffesion}
                                    </Typography>

                                    <Chip
                                        label={`Address: ${item.business_address}`}
                                    />
                                    <Chip label={`Email: ${item.email}`} />
                                    <Chip label={`Phone: ${phone}`} />
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        onClick={() =>
                                            handleClickOpen(item.business_id)
                                        }
                                    >
                                        REQUEST SERVICE
                                    </Button>
                                </CardActions>
                            </Card>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="draggable-dialog-title"
                            >
                                <DialogTitle
                                    style={{ cursor: 'move' }}
                                    id="draggable-dialog-title"
                                >
                                    Are you sure?
                                </DialogTitle>
                                <DialogActions>
                                    <Button onClick={submitTicket}>Yes</Button>
                                    <Button onClick={handleClose}>No</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    )
                }
            })}
        </Box>
    )
}

export default UserLanding
