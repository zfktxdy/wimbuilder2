patch_name = "设备和打印机";

patch_i18n = {
    "Device Setup Manager":"设备安装管理",
    "Service":"服务",
    "Enable the native 'Safely Remove Hardware(Eject USB Device)' feature":"原生安全移除硬件(弹出USB设备)功能",
    "Printers":"打印机"
}

if ($app_host_lang == $lang) {
    $patches_opt['_message.wait_for_printers'] = '                   打印机将在2分钟后工作                  ';
}
