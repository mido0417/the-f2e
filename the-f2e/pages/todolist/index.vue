<template lang="pug">
.row
    .container-fluid
        Header
        .container
            .edit-block
                p.edit-btn + Add Task
                .edit-block-focus
                    .title
                        input.check(type="checkbox", name="check")
                        p Type Something Here…
                        .icon
                            i.fa.fa-star(aria-hidden="true")
                            i.fa.fa-pencil(aria-hidden="true")
                    .content
                        .deadline
                            i.fa.fa-calendar(aria-hidden="true")
                            .wapper
                                p Deadline
                                input(type="date" name="bday")
                                input(type="time" name="usr_time")
                        .file
                            i.fa.fa-file-o(aria-hidden="true")
                            .wapper
                                p File
                                span.plus +
                        .commit
                            i.fa.fa-commenting-o(aria-hidden="true")
                            .wapper
                                p Commit
                                textarea(placeholder="Type your memo here…")
                    .edit-button
                        button.cancel 
                            i.fa.fa-times(aria-hidden="true")
                            span Cancel
                        button.add
                            i.fa.fa-plus(aria-hidden="true")
                            span Add Task
            .list-block
                .title-block
                    .title-text
                    .start
                    .edit
                .date-block
                    .deadline
                    .file    
</template>
<script>
import Header from "@/components/layout/header_01/Header.vue";


export default {
  components: {
    Header,
  },

  head: () => ({
    title: 'Mido的The-F2E挑戰｜01.TodoList',
  }),

  mounted() {
    $(document).ready(function () {
      $(".edit-btn").click(function () {
        $(".edit-block-focus").toggleClass("active");
      });
    });
  },
};

</script>
<style lang="scss" scoped>
.container-fluid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #E1E1E1;
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 50%;
    height: 100vh;
    .edit-block {
      width: 100%;
      .edit-btn {
        margin-top: 20px;
        text-align: left;
        padding: 5px 30px;
        cursor: pointer;
        border: 2px solid #C8C8C8;
        background-color: #fff;
        color: #C8C8C8;
        border-radius: 4px;
        font-size: 24px;
      }
      .edit-block-focus {
        transition: .2s;
        opacity: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        background-color: #F2F2F2;
        border-radius: 5px;
        box-shadow: 0 4px 4px 0 #C8C8C8;
        p {
          padding: 0;
          margin: 0;
        }
        .title {
          font-size: 24px;
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-bottom: 2px solid #C8C8C8;
          padding: 10px 0;
          margin-bottom: 24px;
          .icon {
            .fa {
              transition: .2s;
              color: #000;
            }
            .fa-star {
              &:hover {
                color: #F5A623;
              }
            }
            .fa-pencil {
              margin-left: 20px;
              color: #000;
              &:hover {
                color: #4A90E2;
              }
            }
          }
        }
        .content {
          width: 100%;
          font-size: 20px;
          padding: 0 30px;
          .deadline,
          .file,
          .commit {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 20px;
            .wapper {
              width: 100%;
              margin-left: 5px;
              p {
                margin-bottom: 5px;
              }
              input {
                width: 50%;
              }
              .plus {
                background: #C8C8C8;
                border-radius: 2px;
                color: #fff;
                text-align: center;
                padding: 4px 9px;
              }
              textarea {
                font-size: 20px;
                width: 100%;
                height: 100px;
              }
            }
          }
        }
        .edit-button {
          width: 100%;
          display: flex;
          button {
            border: 0px solid transparent;
            width: 100%;
            padding: 10px 0;
          }
          .cancel {
            background-color: #fff;
            color: #D0021B;
            border-radius: 0 0 0 5px;
          }
          .add {
            background-color: #4A90E2;
            color: #fff;
            border-radius: 0 0 5px 0;
          }
        }
      }
      .active {
        opacity: 1;
        transition: .2s;
      }
    }
  }
}


</style>