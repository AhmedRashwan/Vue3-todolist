import swal from 'sweetalert';
export function useFlash(message, title = "Success", type = "success"){
        return swal({
            title: title,
            text: message,
            icon: type,
            button: "OK",
        });
}

export function useErrorFlash(message, title = "Error", type = "error"){
    return swal({
        title: title,
        text: message,
        icon: type,
        button: "OK",
    });
}