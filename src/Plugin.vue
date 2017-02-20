<template>
  <datepicker :time.sync="model.date" :option="option"></datepicker>
</template>

<script>
export default {
  mixins: [window.Storyblok.plugin],
  methods: {
    initWith: function() {
      return {
        date: '',
        plugin: 'datesync',
        title: 'Datesync - by Philipp Lupulescu | Lupo',
        description: 'Lets you set the date within your component and sets it for the story to allow sorting when using the api'
      }
    }
  },
  data() {
   return {
     time: '',
     option: {
       type: 'min',
       week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
       month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
       format: 'YYYY-MM-DD',
       color: {
         checked: '#09b3af ',
         header: '#09b3af '
       }
     }
   }
 },
  events: {
    // Triggered after the plugin has been inserted and the data has been passed
    'plugin:created': function() {
      if(this.$store && this.$store.model.story){
        if(this.$store.model.story.sort_by_date){
          this.model.date = this.$store.model.story.sort_by_date;
        } 
      }
    },
    // Triggered after the plugin has been removed from DOM
    'plugin:destroyed': function() {
      console.log('plugin:destroyed')
    }
  },
  watch: {
    'model': {
      handler: function (value) {
        this.$emit('changed-model', value);
        if(this.$store && this.$store.model.story){
          this.$store.model.story.sort_by_date = value.date;
        }
      },
      deep: true
    }
  }
}
</script>