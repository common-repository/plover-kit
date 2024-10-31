<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6c4f8dbd4fdfdfc5f97add0e159df827
{
    public static $files = array (
        '09e163e8d401dbacee2ed31861685b99' => __DIR__ . '/../..' . '/src/helpers.php',
    );

    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Plover\\Kit\\' => 11,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Plover\\Kit\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6c4f8dbd4fdfdfc5f97add0e159df827::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6c4f8dbd4fdfdfc5f97add0e159df827::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit6c4f8dbd4fdfdfc5f97add0e159df827::$classMap;

        }, null, ClassLoader::class);
    }
}