import swal from "sweetalert";

export default {
    methods: {
        flash(message, title = "Success", type = "success") {
            return swal({
                title: title,
                text: message,
                icon: type,
                button: "OK",
            });
        }
    }
}