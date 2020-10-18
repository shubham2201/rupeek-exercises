<template>
    <div class="container">
        <div class="row" v-if="status === 'LOADING'">
            <div class="col-12">
                <!-- b4-alert-dismissible -->
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>Loading workshops...</strong>
                </div>
            </div>
        </div>
            
        <div class="row" v-if="status === 'ERROR_LOADING'">
            <div class="col-12">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>{{this.error.message}}</strong>
                </div>
            </div>
        </div>

        <div v-if="status === 'LOADED'">
            <div class="row">
                <div class="col-12 clearfix">
                    <div class="row">
                        <h2>
                            {{workshop.name}}
                        </h2>
                        <hr />
                        <div class="row my-4">
                            <div class="col-4">
                                <img class="img-fluid" :src="workshop.imageUrl" alt="" />
                            </div>
                            <div class="col-8">
                                <div class="row">
                                    <div class="col-3">
                                        <p>
                                            <small>
                                                {{workshop.startDate}} - {{workshop.endDate}}
                                            </small>
                                        </p>
                                        <p>
                                            <small class="text-muted">
                                                {{workshop.time}}
                                            </small>
                                        </p>
                                    </div>
                                    <div class="col-3">
                                        <p> 
                                            <span v-if="workshop.modes.online">✅</span>
                                            <span v-else>❌</span>

                                            <small> Online</small>
                                        </p>
                                        <p>
                                            <span v-if="workshop.modes.inPerson">✅</span>
                                            <span v-else>❌</span>

                                            <small> In Person</small>
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12" v-html="workshop.description"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h2>Sessions in this workshop</h2>
                    <hr>
                    
                    <div v-for = "session in sessions" :key="session.id"> 
                        <div class="abc row"> 
                            <div class="col-2">
                                <div class="voteSection">
                                    <button class="up" @click="incCount( session.id, session.sequenceId )" >
                                        <i class="fa fa-chevron-up" aria-hidden="true"></i>
                                    </button>
                                    <button style="cursor:unset;margin: 10px; width:40px;text-align:centre">{{ session.upvoteCount }}</button>
                                    <button class="down" @click="decCount( session.id, session.sequenceId )">
                                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col-10"> 
                                <p class="sessionName"> {{ session.name }} </p>
                                <div class="author"> by {{ session.speaker }}</div>
                                <div v-if="session.level === 'Basic'" class="basic"> {{ session.level }}</div>
                                <div v-else-if="session.level === 'Intermediate'" class="intermediate"> {{ session.level }}</div>
                                <p v-else class="advance"> {{ session.level }}</p>
                                <p> {{ session.duration }} hours.</p>
                                <p> {{ session.abstract }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { fetchWorkshopById, fetchSessionById, upVote, downVote} from '../services/workshops';
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
Vue.use(VueToast);

const LOADING = 'LOADING', LOADED = 'LOADED', ERROR_LOADING = 'ERROR_LOADING';

export default {
    name: 'WorkshopDetails',
    data() {
        return {
            status: LOADING,
            sessions: []
        };
    },

    mounted() {
        fetchWorkshopById( this.$route.params.id )
            .then( workshop => {
                    this.workshop = workshop;
            })
            .catch( error => {
                this.status = ERROR_LOADING
                this.error = error;
            });

        fetchSessionById ( this.$route.params.id )
             .then( sessions => {
                    // console.log(sessions);
                    this.sessions = sessions;
                    this.status = LOADED;
            })
            .catch( error => {
                this.status = ERROR_LOADING
                this.error = error;
            });
    },

    methods: {
        incCount( id, sessionId ) {
            upVote( id )
                .then( () => {
                    this.sessions[ sessionId-1 ].upvoteCount += 1;
                    Vue.$toast.success('Upvote Counted.', {
                        position: 'bottom-right'
                    })
                })
                .catch( (error) => {
                    console.log(error);
                })
        },

        decCount(id, sessionId) {
            downVote( id )
                .then( () => {
                    console.log(this.sessions[sessionId-1]);
                    this.sessions[ sessionId-1 ].upvoteCount -= 1;
                    Vue.$toast.error('Downvote Counted.', {
                        position: 'bottom-right',
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>

<style scoped>
.abc{
    border: 2px solid #ccc;
    margin: 15px;
}

.voteSection{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}
button{
    border: none;
    outline: none;
    background-color: white;
    font-size: 1.2em;
    width: 1.5em;
}

.up:hover{
    background-color: green;
    font-size: 1.3em;
    color: white;
    box-shadow: 0 8px 16px 0 rgba(0,0,200,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.down:hover{
    background-color: crimson;
    font-size: 1.3em;
    color: white;
    box-shadow: 0 8px 16px 0 rgba(200,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.sessionName{
    font-size: 1.1em;
    margin: 0px;
}

.basic{
    background-color: rgb(9, 172, 9);
    color: white;
    font-weight: bold;
    font-size: 13px;
    width: 50px;
    text-align: center;
    border-radius: 3px;
    margin: 10px 0px 10px 0px;
}

.intermediate{
    background-color: rgb(8, 100, 153);
    color: white;
    font-weight: bold;
    font-size: 13px;
    width: 100px;
    text-align: center;
    border-radius: 3px;
    margin: 10px 0px 10px 0px;
}

.advance{
    background-color: rgb(182, 103, 12);
    color: white;
    font-weight: bold;
    font-size: 13px;
    width: 100px;
    text-align: center;
    border-radius: 3px;
    margin: 10px 0px 10px 0px;
}

.author{
    font-weight: bold;
    font-size: 13px;
}

</style>