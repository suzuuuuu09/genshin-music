import {AppI18N} from "$i18n/i18n";

export const i18n_zh = {
    logs: {
        update_available: "发现新版本应用，是否刷新界面进行更新？请关闭/刷新其他打开应用的选项卡",
        error_with_the_app: "程序出错！",
        loading_instruments: "加载乐器中...",
        loading_song: "加载歌曲中...",
        could_not_find_song: "未能找到歌曲",
        error_loading_instrument: "乐器加载失败",
        error_opening_file: '文件打开失败',
        error_importing_song: '歌曲加载失败',
        error_downloading_audio: "音频下载失败, 可能歌曲太长了",
        song_downloaded: "歌曲已经下载",
        error_downloading_song: "歌曲下载失败",
        error_downloading_songs: "歌曲下载失败",
        error_importing_file: "导入文件“{{file_name}}}”时出错",
        error_importing_file_generic: "文件导入失败",
        error_importing_invalid_format: `文件导入失败, 文件格式错误`,
        song_backup_downloaded: "已下载歌曲备份",
        no_songs_to_backup: "没有要备份的歌曲",
        no_empty_name: "请填写一个非空白的名称",
        cloned_song: `复制歌曲: "{{song_name}}"`,
        converting_recorded_to_composed_warning: '将录制的歌曲转换为创作的歌曲，音频可能不准确',
    },
    question: {
        unsaved_song_save: "您对歌曲“{{song_name}}”有未保存的更改，您现在要保存吗？未保存的更改将会丢失",
        enter_song_name: "填写歌曲名称",
        enter_folder_name: "填写文件夹名称",
        ask_song_name_cancellable: "请填写歌曲名称，点击取消可忽略",
    },
    confirm: {
        delete_song: `你是否确定删除歌曲 "{{song_name}}"?`
    },
    common: {
        warning: "警告",
        error: "错误",
        success: "确认",
        cancel: "取消",
        close: "关闭",
        save: "保存",
        delete: "删除",
        edit: "退出",
        create: "创作",
        add: "添加",
        remove: "清除",
        yes: "是",
        no: "否",
        ok: "完成",
        on: "开",
        off: "关",
        help: "帮助",
        color: "颜色",
        change: "修改",
        reverb: "混响",
        undo: "取消",
        confirm: "确认",
        loading: "加载中...",
        privacy: "隐私",
        donate: "捐赠",
        open: "打开",
        play: "播放",
        record: "录制", //start recording
        stop: "停止",
        erase: "擦除",
        copy: "复制",
        paste: "粘贴",
        pause: "暂停",
        settings: "设置",
        search: "搜索",
        rename: "重命名",
        create_song: "创作歌曲",
        edit_song: "编辑歌曲",
        none: "无",
        instrument: "乐器",
        download: "下载",
        download_midi: "下载 MIDI",
        pitch: "音高", //audio pitch
        bpm: "每分钟节拍数",
        connect: "联网",
        import: "导入",
        border: "边界",
        line: "线路",
        circle: "圆形",
        add_new_instrument: "添加新仪器",

        reset: "Reset",
    },
    home: {
        app_description: "一款可以为 {{APP_NAME}} 创建、练习和播放歌曲的应用。",
        add_to_home_screen: "要使网络应用程序全屏显示，请将网站添加到主屏幕",
        clear_cache_warning: "清除浏览器缓存/存储可能会删除你的歌曲，请确保进行备份",
        persistent_storage_button: "点击下面的按钮，确保您的浏览器不会在存储空间不足时删除您的歌曲",
        privacy_policy: "我们使用cookie进行分析，如果继续使用此应用程序，则表示您同意我们使用cookie，了解更多信息: ",
        no_affiliation: "此应用不隶属于{{company_name}}，它是一个由粉丝制作的程序。",
        composer_description: "使用功能完善的作曲软件创建或编辑歌曲。也可以使用 MIDI。",
        player_description: "播放、下载、录制和导入歌曲。通过缩圈模式和练习模式来学习歌曲。",
        cache_reload_warning: "您确定要清除缓存吗？页面将重新加载",
        cache_cleared: "已清除缓存",
        error_clearing_cache: "清除缓存出错",
        close_home_menu: "关闭主菜单",
        composer_name: "作曲器",
        player_name: "演奏器",
        vsrg_composer_name: "VSRG作曲器",
        donate_name: "捐赠",
        vsrg_player_name: "VSRG演奏器",
        zen_keyboard_name: "Zen 键盘",
        sheet_visualizer_name: "曲谱可视化工具",
        themes_name: "主题",
        blog_and_guides_name: "博客和指南",
        keybinds_or_midi_name: "按键绑定/MIDI",
        keybinds_name: "按键绑定",
        partners_name: "合作伙伴",
        backup_name: "备份",
        changelog_name: "变更日志",
        other_apps_name: "其他应用程序",
        clear_cache_name: "清除缓存",
        scale: "大小",
        rights: "© {{company_name}} 保留所有权利。其他财产属于其各自所有者。",
        hide_on_open: "启动时隐藏",
        beta: "公测版",

        about_to_leave_warning: `You are about to leave the app to go to "{{to}}", do you want to continue?`,
        find_out_more: "Find out more",
        close_promotion: "Close promotion",
        install_app: "Install App",
    },
    menu: {
        close_menu: "关闭菜单",
        toggle_menu: "切换菜单",
        open_settings_menu: "打开设置菜单",
        open_home_menu: "打开主菜单",
        open_songs_menu: "打开歌曲菜单",
        open_library_menu: "打开库菜单",
        open_info_menu: "打开信息菜单",
        settings: "设置",
        song_menu: "歌曲菜单",
        help: "帮助",
        settings_menu: "设置菜单",
        song_name: "歌曲名称",
        go_back: "返回",
        play_song: "播放歌曲",
        invalid_song: "无效歌曲",
        download_song: "下载歌曲 {{song_name}}",
        delete_song: "删除歌曲 {{song_name}}",
        change_app_theme: "更改应用主题",
        download_all_songs_backup: "下载所有歌曲（备份）",
        connect_midi_keyboard: "连接 MIDI 键盘",
        import_song_sheet: "导入歌单",
        compose_song: "创作歌曲",
        select_menu: "选择菜单",
        create_folder: "创建文件夹",
        hint_no_composed_songs: "这里没有歌曲，创作一首！",
        hint_no_recorded_songs: "这里没有歌曲，录制一首！",
        hint_no_songs_in_folder: "这里没有歌曲，添加一首！",
        folder_empty: '文件夹为空',
        midi_download_warning: "如果您使用MIDI，歌曲会失去一些准确性，如果您想与其他人分享歌曲，请使用其他格式（上面的按钮）。您仍然想下载吗？",
        confirm_delete_folder: `您确定要删除文件夹“{{folder_name}}”吗？
            歌曲不会被删除`,
        filter_alphabetical: "按字母顺序",
        "filter_date-created": "创建日期",
        open_in_composer: "在编曲器中打开"
    },
    settings: {
        toggle_metronome: "切换节拍器",
        change_keybinds: "更改按键绑定",
        more_options: "更多选项",
        memory_persisted: "存储被持久化",
        memory_not_persisted: "存储未持久化",
        memory_persisted_description: "您的数据保留在浏览器中，浏览器不应自动清除它。始终确保时常下载备份，尤其是当您长时间不使用该应用程序的情况下。",
        memory_not_persisted_description: "浏览器不允许持久存储数据，当缓存自动清除时，可能会丢失数据。要获得持久存储，请将应用程序添加到主屏幕。如果仍然不起作用，请确保经常进行备份",
        props: {
            composer_bpm: "节拍",
            composer_bpm_description: "每分钟节拍数，歌曲的速度。通常应用程序内的 BPM 应该是您尝试创作的歌曲的 BPM 的 4 倍",
            composer_base_pitch: "基本音高",
            composer_base_pitch_description: "歌曲的主音",
            composer_beat_marks: "节拍标记",
            composer_beat_marks_description: "每小节的节拍数，3/4 是每小节 3 拍，4/4 是每小节 4 拍",
            composer_note_name_type: "音符名称类型",
            composer_note_name_type_description: "在音符上标注文本的类型",
            composer_columns_per_canvas: "可见列数",
            composer_columns_per_canvas_description: "一次可见多少列，更多列可能会导致延迟",
            composer_reverb: "基础混响（洞穴模式）",
            composer_reverb_description: "让你听起来像是在一个洞穴里，这是应用于每种乐器的默认值",
            composer_autosave: "自动保存更改",
            composer_autosave_description: "每 5 次编辑以及当您更改页面/更改歌曲时自动保存对歌曲的更改",
            composer_use_keyboard_side_buttons: "在键盘周围放置下一列/上一列按钮",
            composer_use_keyboard_side_buttons_description: "将切换下一列/上一列的按钮添加在键盘右侧/左侧",
            composer_sync_tabs: "在所有选项卡中自动播放（仅限 PC）",
            composer_sync_tabs_description: "高级功能，它同步其他浏览器选项卡以同时播放",
            composer_lookahead_time: "前窥时长",
            composer_lookahead_time_description: "编曲器将提前多少毫秒寻找要播放的音符，较高的值可以提高播放准确性，但感觉响应速度较差",

            player_instrument: "乐器",
            player_instrument_description: "播放器的主要（第一个）乐器，也将保存在您录制的歌曲中",
            player_pitch: "音高",
            player_pitch_description: "播放器的音高，也将保存在您录制的歌曲中",
            player_bpm: "节拍数",
            player_bpm_description: "每分钟节拍数，由节拍器使用，并在和编曲器转换歌曲时使用",
            player_sync_song_data: "自动同步歌曲的乐器和音高",
            player_sync_song_data_description: "每当您加载歌曲时，该歌曲的乐器和音高也会被加载",
            player_metronome_beats: "节拍器节拍",
            player_metronome_beats_description: "经过多少拍数后播放更强的节拍",
            player_metronome_volume: "节拍器音量",
            player_metronome_volume_description: "节拍器的音量",
            player_reverb: "混响（洞穴模式）",
            player_reverb_description: "让您听起来像是在一个山洞里",
            player_note_name_type: "音符名称类型",
            player_note_name_type_description: "在音符上标注文本的类型",
            player_keyboard_size: "键盘大小",
            player_keyboard_size_description: "缩放键盘尺寸",
            player_keyboard_y_position: "键盘垂直位置",
            player_keyboard_y_position_description: "键盘的垂直位置",
            player_approach_speed: "接近速率 (AR)",
            player_approach_speed_description: "音符出现和到达结束之间的时间（以毫秒为单位）",
            player_note_animation: "音符动画",
            player_note_animation_description: "切换音符动画（会降低性能）",
            player_show_visual_sheet: "显示键位表",
            player_show_visual_sheet_description: "在键盘上方显示键位表（可能会降低性能）",

            vsrg_composer_keys: "物量",
            vsrg_composer_keys_description: "歌曲包含的音符数",
            vsrg_composer_bpm: "节拍数",
            vsrg_composer_bpm_description: "每分钟节拍数，歌曲的速度",
            vsrg_composer_pitch: "基本音高",
            vsrg_composer_pitch_description: "歌曲的主音",
            vsrg_composer_is_vertical: "垂直编辑器",
            vsrg_composer_is_vertical_description: "编辑器设置为水平或垂直",
            vsrg_composer_max_fps: "最大 FPS（数值高可能会带来延迟）",
            vsrg_composer_max_fps_description: "编辑器的FPS限制器，值越高可能会更大延迟",
            vsrg_scroll_snap: "锚定滚动条到锚点",
            vsrg_scroll_snap_description: "滚动时，将时间戳锚定到最近的锚点",
            vsrg_composer_autosave: "自动保存更改",
            vsrg_composer_autosave_description: "每 5 次编辑以及当您更改页面/更改歌曲时自动保存对歌曲的更改",
            vsrg_composer_difficulty: "难度",
            vsrg_composer_difficulty_description: "值越高意味着需要更准确地按下音符",

            vsrg_player_approach_time: "应对时间",
            vsrg_player_approach_time_description: "音符出现与结束之间的时间（以毫秒为单位）",
            vsrg_player_max_fps: "最大 FPS",
            vsrg_player_max_fps_description: "播放器的FPS限制器，过高的值可能会导致延迟或卡顿",
            vsrg_player_keyboard_layout: "键盘布局",
            vsrg_player_keyboard_layout_description: "演奏器的键盘布局",
            vsrg_player_offset: "音频偏移",
            vsrg_player_offset_description: "在音频播放太早/太晚时，对音频的偏移量（以毫秒为单位）",
            vsrg_player_vertical_offset: "垂直位置",
            vsrg_player_vertical_offset_description: "横行布局的垂直偏移",
            vsrg_player_horizontal_offset: "水平位置",
            vsrg_player_horizontal_offset_description: "横行布局的水平偏移",

            zen_instrument: "乐器",
            zen_instrument_description: "键盘的主要乐器",
            zen_pitch: "音高",
            zen_pitch_description: "键盘的音高",
            zen_metronome_beats: "节拍器节拍",
            zen_metronome_beats_description: "经过多少拍数后播放更强的节拍",
            zen_metronome_volume: "节拍器音量",
            zen_metronome_volume_description: "节拍器的音量",
            zen_metronome_bpm: "节拍器节拍数",
            zen_metronome_bpm_description: "节拍器的节拍数",
            zen_reverb: "混响（洞穴模式）",
            zen_reverb_description: "让您听起来像是在一个山洞里",
            zen_note_name_type: "音符名称类型",
            zen_note_name_type_description: "在音符上标注文本的类型",
            zen_keyboard_size: "键盘大小",
            zen_keyboard_size_description: "缩放键盘尺寸",
            zen_keyboard_y_position: "垂直位置",
            zen_keyboard_y_position_description: "键盘的垂直位置",
            zen_keyboard_spacing: "键盘间距",
            zen_keyboard_spacing_description: "音符之间的间距",
        },
        category: {
            'keyboard': "键盘",
            'metronome': "节拍器",
            'layout_settings': "布局设置",
            "player_settings": "演奏器设置",
            "song_settings": "歌曲设置",
            "composer_settings": "编曲器设置",
            "editor_settings": "编辑器设置",
        },

        select_language: "Select language",
    },

    zen_keyboard: {
        loading_instrument: "加载乐器: {{instrument}}..."
    },
    vsrg_composer: {
        delete_track_question: "您确定要删除此曲目吗？所有音符都将被删除。",
        cannot_delete_last_track: "无法删除最后一首曲目",
        snap: '捕捉', //this means snapping to a point, like anchoring to it
        background_song: "背景歌曲",
        background_song_info: "您可以选择一首歌曲在后台播放",
        no_background_song_selected: "未选择背景歌曲",
        instrument_modifiers: '乐器修饰符',
        tap: "点击",
        hold: "长按",
        delete: "删除",
        track_name: '音轨名称'
    },
    transfer: {
        connecting_please_wait: "正在连接，请稍候...",
        error_connecting: "连接时出错，请访问域名，可能有变更日志。",
        import_data_from_other_domains_title: "从其他域导入数据",
        import_data_from_other_domains_description: "在这里您可以从应用程序的其他现有域导入数据，选择要导入的域并单击导入，您将看到来自其他域的所有数据，您可以选择一次全部导入。或者只导入您需要的内容。",
        select_a_website_to_import_data: "选择要从中导入数据的网站",
        data: "数据", //data to import
        import_all: "全部导入",
        no_data_to_import: "没有要导入的数据"
    },
    theme: {
        error_importing_theme: '导入此主题时出错，它是正确的文件吗？',
        choose_theme_name: '你想如何命名主题？',
        confirm_delete_theme: `您确定要删除主题“{{theme_name}}”吗？`,
        import_theme: "导入主题",
        theme_prop: {
            background_image: '背景图片（URL）',
            composer_background_image: "编曲界面背景图片 (URL)",
            theme_name: "主题名称",
        },
        opaque_performance_warning: 'GIF 背景和不透明（透明）颜色可能会降低性能',
        your_themes: "你的主题",
        new_theme: "新主题",
        default_themes: "默认主题",
        preview: "预览",
        view_player: "查看演奏器", //shows the player preview
        view_composer: "查看编曲器",
        colors: {
            background: "Background",
            primary: "Primary",
            secondary: "Secondary",
            accent: "Accent",
            composer_accent: "Composer accent",
            composer_main_layer: "Composer main layer",
            composer_secondary_layer: "Composer secondary layer",
            icon_color: "Icon color",
            menu_background: "Menu background",
            note_background: "Note background",
        }
    },

    sheet_visualizer: {
        note_names: "音符名称",
        merge_empty_spaces: "合并空格",
        no_song_selected: "未选择歌曲",
        print_as_pdf: "打印为 PDF",
        sheet_visualizer_instructions: "从左侧菜单中选择一首歌曲，您可以使用演奏器中的交互式练习工具来学习歌曲",
        per_row: '每行', //elements per row
        invalid_song_to_visualize: '无效歌曲，未创作或录制',
        error_converting_to_visual_song_try_convert_in_recorded: '将歌曲转换为视觉歌曲时出错，尝试先转换为录制的歌曲...',
        error_converting_to_visual_song: "将歌曲转换为视觉歌曲时出错"
    },
    player: {
        finish_recording: "结束录制",
        record_audio: "录制音频",
        change_speed: "改变速度",
        stop_song: "停止歌曲",
        accuracy: "准确度",
        score: "分数",
        combo: "组合",
        practice_mode: "练习", //song practice
        practice_mode_description: "练习歌曲“{{song_name}}”",
        approach_mode: "缩圈模式",//TODO find new name for this, it's the mode where circles "come towards" notes
        //How about ring_closing_mode, indicating that being outside of the shrinking ring = losing point.
        approach_mode_description: "在缩圈模式下演奏歌曲“{{song_name}}”",
        song_search_no_results: "没有结果",
        song_search_description: "在这里你可以找到要学习的歌曲，这些歌曲由天空音乐库提供。",
        midi_or_audio_import_redirect_warning: "您不能直接导入此文件格式。MIDI、视频和音频文件需要在composer中转换，是否要打开它？",
    },
    keybinds: {
        already_used_keybind: "这个按键绑定已经被音符“{{note_name}}”使用",
        midi_keybinds: "MIDI 按键绑定",
        keyboard_keybinds: "键盘按键绑定",
        keyboard_keybinds_description: "您可以将键盘按键重新映射到键盘上的任何键，按下要重新映射的音符，然后按下要分配给它的键。",
        composer_shortcuts: "作曲器快捷键",
        player_shortcuts: "演奏器快捷键",
        vsrg_composer_shortcuts: "Vsrg 作曲器快捷键",
        vsrg_player_shortcuts: "Vsrg 演奏器快捷键",
        vsrg_keybinds: "Vsrg 按键绑定",
        connected_midi_devices: "连接的 MIDI 设备",
        no_connected_devices: "没有连接的设备",
        midi_layout_preset: "MIDI 布局预设",
        delete_midi_preset: "删除预设",
        create_midi_preset: "创建新预设",
        midi_note_selection_description: "单击音符将其选中，然后按 MIDI 键盘将该音符分配给该琴键。您可以再次单击它来更改它。",
        midi_shortcuts: "MIDI 快捷键",
        confirm_delete_preset: "您确定要删除预设“{{preset_name}}”吗？",
        cannot_delete_builtin_preset: "无法删除内置预设",
        already_existing_preset: "此名称的预设已存在",
        ask_preset_name: "写下预设的名称",
        key_already_used: "按键已被使用",
        cannot_edit_builtin_preset: "无法编辑内置预设，请创建一个新预设进行编辑",

        midi_status: "MIDI status",
        midi_access_denied: "MIDI access was denied, please allow it in the browser settings and reload the page",
        midi_access_unsupported: "MIDI is not supported in this browser",
        midi_access_pending: "Waiting for MIDI access...",
        midi_access_granted: "MIDI available!",
    },
    error: {
        confirm_delete_all_songs: "您确定要删除所有歌曲吗？",
        settings_reset_notice: "设置已重置",
        error_page_description: "如果您意外地看到此页面，则意味着发生了错误。您可以在此处下载或删除您的歌曲——如果某首歌导致错误，请删除它。如果您需要帮助，请加入我们的discord服务器并发送下面的日志文件。",
        reset_settings: "重置设置",
        delete_all_songs: "删除所有歌曲",
        error_logs: "错误日志",
        download_logs: "下载日志",
    },
    donate: {
        donate_message: "我制作的每个应用程序都需要数月的学习和开发时间，此外还有托管成本。有了更高的预算，我就可以不必太担心在服务器上花费了多少钱，从而为您提供最佳的体验。\n我关心的是让使用者享受所有功能而免于付费或是烦人的侵入性广告。因此除了捐赠之外，项目没有任何收入来源。\n如果您可以考虑捐赠以支持开发和成本，我将非常感激。"
    },
    cache: {
        cache: "缓存",
        reset_cache: "重置缓存",
        reset_cache_message: "此页面将清除应用程序的缓存。这将删除所有缓存的数据并重新加载页面，它不会删除您的歌曲或数据，只会删除缓存的资源。当您访问此页面时，程序自动清除缓存。您也可以单击下面的按钮手动清除缓存。",
        clear_cache: '清除缓存'
    },
    changelog: {
        view_error_logs: "查看错误日志",
    },
    page404: {
        page_not_found: "该页面未找到，点击此处返回首页。"
    },
    backup: {
        confirm_after_songs_validation_error: "验证某些歌曲时出错。您想继续下载吗？",
        confirm_after_folders_validation_error: "验证某些文件夹时出错。是否要继续下载？",
        confirm_after_themes_validation_error: "验证某些主题时出错。您想继续下载吗？",
        confirm_delete_songs_step_1: "如果要删除所有歌曲，请输入'delete'这个单词，按取消忽略", //do not translate 'delete'
        confirm_delete_songs_step_2: "您真的确定要删除所有歌曲吗？",
        confirm_delete_themes_step_1: "如果要删除所有主题，请输入'delete'这个单词，按取消忽略", //do not translate 'delete'
        confirm_delete_themes_step_2: "您真的确定要删除所有主题吗？",
        deleted_all_songs_notice: "删除所有歌曲",
        deleted_all_themes_notice: "删除所有主题",
        error_validating_song: `验证歌曲“{{song_name}}”时出错`,
        error_validating_folder: "验证文件夹“{{folder_name}}时出错”",
        error_validating_theme: `验证主题“{{theme_name}}”时出错`,
        validating_songs: "正在验证歌曲",
        validating_folders: "正在验证文件夹",
        validating_themes: "验证主题",
        action_cancelled: '操作已取消',
        zipping_files: "压缩文件",
        transfer_from_other_domain: "从其他域转移",
        transfer_data_notice: "如果您想从应用程序的另一个域传输数据，请单击此处",
        transfer: "转移",
        backup_as: "备份为",
        backup_advice: "确保时不时地创建备份，尤其是当您刚刚完成一首新歌曲时。 浏览器不应该删除您的数据，特别是如果您安装了该应用程序，但也不是万无一失。",
        backup_download_tooltip: "下载应用程序的所有数据，又名主题、歌曲、文件夹",
        backup_downloaded: "已下载备份",
        backup_download_error: "下载备份时出错",
        download_all_backup: "下载所有备份",
        download_all_backup_tooltip: "下载包含所有歌曲和文件夹的备份",
        no_items_to_backup: "没有什么可备份的",
        download_songs_tooltip: "下载包含所有歌曲和文件夹的备份",
        downloaded_songs_notice: "下载的歌曲备份",
        download_songs_backup: "下载歌曲备份",
        download_themes_tooltip: "下载所有自定义主题的备份",
        no_themes_to_backup: "没有要备份的主题",
        downloaded_themes_notice: "下载的主题备份",
        download_themes_backup: "下载主题备份",
        import_backup: "导入备份",
        import_backup_description: `如果您有备份，可以在此处导入，备份将添加到您现有的数据中（对于已经存在的歌，会创建一个副本）。`,
        error_reading_file: "读取文件时出错",
        import_backup_tooltip: "在这里您可以导入您拥有的任何备份",
        songs: "歌曲",
        themes: "主题",
        delete_data: "删除数据",
        delete_data_description: "如果您愿意，您也可以在这里删除所有数据，一旦删除就无法恢复。不用担心，在删除任何内容之前，会要求您确认。",
        delete_songs_and_folders: "删除歌曲和文件夹",
        delete_songs_and_folders_tooltip: "在这里您可以删除所有主题",
        delete_themes_tooltip: "在这里您可以删除所有主题",
        delete_themes: "删除主题",
    },
    composer: {
        add_new_page: "添加新页面",
        remove_column: "删除列",
        add_column: "添加列",
        open_tools: "打开工具",
        clone_song: "克隆歌曲",
        remove_breakpoint: "删除断点",
        add_breakpoint: "添加断点",
        cant_remove_all_layers: "你不能删除所有音层！",
        confirm_layer_remove: `您确定要删除“{{layer_name}}”吗？该层的所有音符都将被删除`,
        cant_add_more_than_n_layers: `您不能添加超过 {{max_layers}} 层！`,
        ask_song_name_for_composed_song_version: "填写创作版本的歌曲名称，按取消忽略",
        start_recording_audio: "开始录制音频",
        stop_recording_audio: "停止录制音频",
        create_new_song: "创作新歌",
        create_from_midi_or_audio: "从 MIDI/音频创建",
        previous_breakpoint: "上一个断点", //breakpoint is a sort of point to "jump", a sort of bookmark
        next_breakpoint: "下一个断点",
        tempo: "Tempo", //this is musical tempo 1/2, 1/4, 1/8 etc
        error_with_this_layer: "该层出现错误",
        recording_audio: "录制音频",
        tools: {
            move_notes_up: "向上移动音符",
            move_notes_up_description: "将音符向上推 1 个位置",
            move_notes_down: "向下移动音符",
            move_notes_down_description: "将音符向下推 1 个位置",
            only_layer: "音层限定", //this will be used as Only layer 1... etc
            clear_selection: "清除选择",
            all_layers: "所有音层",
            all_layers_description: "选择突出显示列中的所有音层",
            paste_in_layer_n: "粘贴到第 {{layer_number}} 层",
            insert_in_layer_n: "插入层 {{layer_number}}",
            paste_all_layers: "粘贴全部",
            insert_all_layers: "插入全部",
            select_layer_description: "选择突出显示列中的所有音符或仅选择当前层的音符",
            delete_selected_columns: "删除选定的列",
            erase_all_selected_notes: "删除所有选定的音符",
            insert_copied_notes: "插入复制的音符",
            paste_copied_notes: "粘贴复制的音符",
            copy_notes: "复制所有音符"
        },
        midi_parser: {
            out_of_range: "超出范围",
            accidentals: "临时记号",
            total_notes: "总音符",
            select_midi_tracks: "选择 MIDI 轨道",
            ignore_empty_tracks: "忽略空轨道",
            include_accidentals: "包括临时记号",
            global_note_offset: "全局音符偏移量",
            global_note_offset_description: "每个音符的索引将被上推/下推这个量，您可以使用它来使歌曲适合应用的音域。您还可以更改每个图层的偏移量。",
            local_note_offset: "局部轨道音符偏移量",
            local_note_offset_description: "按此数量更改每个音符的索引。",
            max_octave_scaling: "最大音符八度缩放",
            max_octave_scaling_description: " 缩小/放大超出这些八度音阶的音符。",
            number_of_notes: "音符数量",

            open_midi_audio_file: "打开 MIDI/音频/视频文件",
            there_are_no_notes: "没有音符",
            error_is_file_midi: "导入此文件时出错，它是 .mid 文件吗？",
            converting_audio_to_midi: "正在将音频转换为 midi（可能需要一段时间）..",
            detecting_notes: "检测音符",
            loading_converter: '正在加载转换器',
            audio_conversion_warning: `🔬 此功能是实验性的，它可能无法工作或卡住 \n音频和视频转换不如 MIDI 准确，如果可以，最好使用 MIDI 或手动编写 \n使用只有一个乐器演奏的音频和视频。`
        },

        warning_opening_midi_importer: `Opening the midi importer to import a MIDI file, please reselect the file`,
        warning_opening_audio_importer: `Opening the midi importer to import a video/audio file... Please reselect the file. video/audio conversion is not very accurate`,
        error_importing_file_invalid_format: `Error importing file, invalid format`,
        error_importing_file_invalid_format_audio_video: `Error importing file, invalid format, if it's a MIDI,Video or audio file, use the "Create from MIDI" button`,
        ask_download_of_current_song: `You are currently editing this song ("{{song_name}}"), do you want to save it before downloading?`,
    },
    instrument_settings: {
        no_instrument_selected: "未选择乐器",
        layer_name: "音层名称",
        use_song_pitch: "使用歌曲音高",
        use_song_reverb: "使用歌曲混响",
        note_icon: "音符图标",
        volume: "音量",
        volume_high_warning: "如果听到失真，请降低音量",
        move_down: "向下移动",
        move_up: "向上移动",
    },

    tutorials: {
        composer: {
            li_1: "点击歌曲名即可加载。",
            li_2: "您可以为每一层使用不同的乐器和音调。",
            li_3: "节奏变换器可以帮助您制作歌曲的更快部分，而无需非常高的每分钟节拍数。",
            li_4: "您可以通过导入 MIDI 文件并编辑来快速创建歌曲，并非所有歌曲都可以直接转换，您可能需要稍微编辑一下。",
            li_5: "您还可以从音频/视频快速创建歌曲，这是一个实验性功能，不太准确。",
            li_6: "您可以在时间线（编曲器下方的栏）中添加断点，以在歌曲的各个部分之间快速跳转。"
        },
        player: {
            li_1: "点击歌曲名即可播放。",
            li_2: "您可以导入其他用户制作的歌曲（不接受音频文件）。您也可以下载自己的歌曲进行分享",
            li_3: "要创作你的歌曲，你可以录制你演奏的音符或在编曲器中创建一首。",
            li_4: "启动练习模式",
            li_5: "启动缩圈模式",
            li_6: "可以连接MIDI键盘来演奏",
        },
        help: {
            question_mark_description: "将鼠标悬停在按钮上可查看工具提示。单击此按钮 (?) 时，它将显示更多信息。",
            example_help: "帮助示例",
            learn_how_to_use_player: "学习如何使用演奏器",
            learn_how_to_use_composer: "学习如何使用作曲器",
            learn_how_to_use_vsrg_composer: "学习如何使用 Vsrg 作曲器",
            click_to_visit_blog: "点击此处访问教程",
            change_keybinds: "更改按键绑定",
            composer_shortcuts: "作曲器快捷键",
            vsrg_composer_shortcuts: "Vsrg 作曲器快捷键",
            player_shortcuts: "播放器快捷键",
        }
    },

    shortcuts: {
        holdable: "可长按",
        props: {
            //names
            toggle_play: "切换播放",
            previous_column: "上一列",
            next_column: "下一列",
            remove_column: "删除列",
            add_column: "添加列",
            previous_layer: "上一层",
            next_layer: "下一层",
            next_breakpoint: "下一个断点",
            previous_breakpoint: "上一个断点",
            toggle_record: "切换记录",
            stop: "停止",
            restart: "重新启动",
            toggle_menu: "切换菜单",
            close_menu: "关闭菜单",
            move_up: "向上移动",
            move_down: "向下移动",
            move_left: "向左移动",
            move_right: "向右移动",
            deselect: "取消选择",
            delete: "删除",
            next_track: "下一音轨",
            previous_track: "上一音轨",
            set_tap_hand: "点击-短音",
            set_hold_hand: "点击-长音",
            set_delete_hand: "点击-删除",

            //descriptions
            toggle_play_description: "切换播放/暂停",
            previous_column_description: "选择上一列",
            next_column_description: "选择下一列",
            remove_column_description: "删除选定的列",
            add_column_description: "在选定列后添加一列",
            previous_layer_description: "选择上一音层",
            next_layer_description: "选择下一音层",
            next_breakpoint_description: "移动到下一个断点",
            previous_breakpoint_description: "移动到上一个断点",
            toggle_record_description: "切换键盘录音",
            stop_description: "停止播放/录音/练习",
            restart_description: "重新开始歌曲或练习",
            toggle_menu_description: "切换菜单",
            close_menu_description: "关闭菜单",
            move_up_description: "将选定的音符向上移动",
            move_down_description: "将选定的音符向下移动",
            move_left_description: "向左移动选定的音符",
            move_right_description: "向右移动所选音符",
            deselect_description: "取消选择选定的音符",
            delete_description: "删除选定的音符",
            next_track_description: "选择下一音轨",
            previous_track_description: "选择上一音轨",
            set_tap_hand_description: "设置点击功能为创建短音",
            set_hold_hand_description: "设置点击功能为创建长音",
            set_delete_hand_description: "设置点击功能为删除音符",
            vsrg_add_hit_object: "添加打击乐对象（同步到注册的按键绑定）",
        }
    },
    instruments: {
        "Lyre": "Lyre",
        "Vintage-Lyre": "Vintage Lyre",
        "Zither": "Zither",
        "Old-Zither": "Old Zither",
        "DunDun": "DunDun",
        "Piano": "Piano",
        "Contrabass": "Contrabass",
        "Guitar": "Guitar",
        "LightGuitar": "Light Guitar",
        "Harp": "Harp",
        "Horn": "Horn",
        "Trumpet": "Trumpet",
        "Pipa": "Pipa",
        "WinterPiano": "Winter Piano",
        "Xylophone": "Xylophone",
        "Flute": "Flute",
        "Panflute": "Panflute",
        "Ocarina": "Ocarina",
        "MantaOcarina": "Manta Ocarina",
        "Aurora": "Aurora", //leave as is
        "Kalimba": "Kalimba",
        "ToyUkulele": "Toy Ukulele",
        "Drum": "Drum",
        "Bells": "Bells",
        "HandPan": "HandPan",
        "SFX_SineSynth": "Sine Synth",
        "SFX_BassSynth": "Bass Synth",
        "SFX_ChimeSynth": "Chime Synth",
        "SFX_TR-909": "TR-909", //leave as is
        "SFX_Dance": "Dance",
        "SFX_BirdCall": "Bird Call",// call is like "sound of a bird" or "sing"
        "SFX_CrabCall": "Crab Call",
        "SFX_FishCall": "Fish Call",
        "SFX_SpiritMantaCall": "Spirit Manta Call",
        "SFX_JellyCall": "Jelly Call", //jellyfish
        "SFX_MantaCall": "Manta Call",
        "SFX_MothCall": "Moth Call",
    }
} as const satisfies AppI18N
