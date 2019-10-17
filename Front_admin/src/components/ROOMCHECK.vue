<template>
  <div >
      <v-container >
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat class="black" style="color:white">
          <v-btn outlined class="mr-4" @click="setToday" style="color:white">
            Today
          </v-btn>
          <v-btn fab text small @click="prev">
            <v-icon style="color:white" small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next">
            <v-icon style="color:white" small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn
                outlined
                v-on="on"
                style="color:white"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right style="color:white">mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="grey"
          :events="events"
          :event-margin-bottom="3"
          :event-color="getEventColor"
          :now="today"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          full-width
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar color="red lighten-3" style="color:white">
              <v-toolbar-title v-html="selectedEvent.roomid"></v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
              <span v-html="reserve +'....'+ selectedEvent.duration + '....Day'"></span>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</v-container></div>
</template>
<script>
  export default {
    data: () => ({
      today: '2019-10-04',
      focus: '2019-10-04',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      start: null,
      end: null,
      reserve: 'reserve',
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: []
    }),
    created () {
    this.getData()
  },
    computed: {
      title () {
        const { start, end } = this
        if (!start || !end) {
          return ''
        }

        const startMonth = this.monthFormatter(start)
        const endMonth = this.monthFormatter(end)
        const suffixMonth = startMonth === endMonth ? '' : endMonth

        const startYear = start.year
        const endYear = end.year
        const suffixYear = startYear === endYear ? '' : endYear

        const startDay = start.day + this.nth(start.day)
        const endDay = end.day + this.nth(end.day)

        switch (this.type) {
            case 'month':
              return `${startMonth} ${startYear}`
            case 'week':
            case '4day':
              return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
            case 'day':
              return `${startMonth} ${startDay} ${startYear}`
        }
      return ''
    },
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long'
      })
    }
  },
    mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    setToday () {
      this.focus = this.today
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
    }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
    }
      nativeEvent.stopPropagation()
    },
     getEventColor (event) {
        return event.color
      },
    updateRange ({ start, end }) {
        // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
      this.start = start
      this.end = end
    },
    nth (d) {
      return d > 3 && d < 21
        ? 'th'
        : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    },
    getData () {
    this.axios.get(process.env.VUE_APP_API + '/show_booking').then((response) => {
      console.log(response.data)
      this.events = response.data
    })
    }
  }
}
</script>
